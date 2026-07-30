import fs from 'fs';
import path from 'path';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const getNextId = () => {
  try {
    const files = fs.readdirSync('src/data/projects');
    const metadataFiles = files.filter(f => f !== 'index.js' && f.endsWith('.js'));
    return metadataFiles.length + 1;
  } catch (error) {
    return 1;
  }
};

const toCamelCase = (str) => {
  return str
    .replace(/[-_]+/g, ' ')
    .replace(/[^\w\s]/g, '')
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, '');
};

const toTitleCase = (str) => {
  return str
    .replace(/[-_]+/g, ' ')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/\b\w/g, c => c.toUpperCase());
};

const createProject = (slug) => {
  const cleanSlug = slug.trim().replace(/[^a-zA-Z0-9-_]/g, '');
  if (!cleanSlug) {
    console.error('❌ Error: Invalid slug.');
    process.exit(1);
  }

  const projectDir = path.join('src/projects', cleanSlug);
  const metadataPath = path.join('src/data/projects', `${cleanSlug}.js`);

  // 1. Check if directories exist
  if (fs.existsSync(projectDir)) {
    console.error(`❌ Error: Project directory 'src/projects/${cleanSlug}' already exists.`);
    process.exit(1);
  }
  if (fs.existsSync(metadataPath)) {
    console.error(`❌ Error: Metadata file 'src/data/projects/${cleanSlug}.js' already exists.`);
    process.exit(1);
  }

  // 2. Create the target directory and copy index.jsx
  fs.mkdirSync(projectDir, { recursive: true });
  fs.copyFileSync('src/projects/_template/index.jsx', path.join(projectDir, 'index.jsx'));
  console.log(`✅ Created directory: src/projects/${cleanSlug}`);
  console.log(`✅ Copied index.jsx template`);

  // 3. Read, update, and write metadata.js
  const templateMetadataPath = 'src/projects/_template/metadata.js';
  let metadataContent = fs.readFileSync(templateMetadataPath, 'utf8');

  const nextId = getNextId();
  const title = toTitleCase(cleanSlug);

  metadataContent = metadataContent
    .replace(/id:\s*\d+/, `id: ${nextId}`)
    .replace(/slug:\s*['"`]newProject['"`]/, `slug: '${cleanSlug}'`)
    .replace(/title:\s*['"`]New Project['"`]/, `title: '${title}'`)
    .replace(/newProject/g, cleanSlug);

  fs.writeFileSync(metadataPath, metadataContent, 'utf8');
  console.log(`✅ Created metadata: src/data/projects/${cleanSlug}.js`);

  // 4. Register in src/data/projects/index.js
  const registryPath = 'src/data/projects/index.js';
  let registryContent = fs.readFileSync(registryPath, 'utf8');

  const camelCaseName = toCamelCase(cleanSlug);
  const importStatement = `import ${camelCaseName} from './${cleanSlug}'\n`;

  // Insert import statement at the top of imports or before the projects array
  const alternateImportAnchor = '// Add new project';
  
  if (registryContent.includes(alternateImportAnchor)) {
    registryContent = registryContent.replace(alternateImportAnchor, `${importStatement}${alternateImportAnchor}`);
  } else {
    registryContent = importStatement + registryContent;
  }

  // Insert project variable in the projects array
  const arrayAnchor = '// Add more project here ↑';
  if (registryContent.includes(arrayAnchor)) {
    registryContent = registryContent.replace(arrayAnchor, `${camelCaseName},\n  ${arrayAnchor}`);
  } else {
    // Fallback if comments are missing
    registryContent = registryContent.replace(/const projects = \[\s*/, `const projects = [\n  ${camelCaseName},\n  `);
  }

  fs.writeFileSync(registryPath, registryContent, 'utf8');
  console.log(`✅ Registered in src/data/projects/index.js`);

  // 5. Register in src/pages/ProjectDetail.jsx (lazy loading mapping)
  const detailPath = 'src/pages/ProjectDetail.jsx';
  if (fs.existsSync(detailPath)) {
    let detailContent = fs.readFileSync(detailPath, 'utf8');
    
    // Ensure 'lazy' is imported
    if (detailContent.includes('import { Suspense } from "react"')) {
      detailContent = detailContent.replace('import { Suspense } from "react"', 'import { Suspense, lazy } from "react"');
    } else if (detailContent.includes("import { Suspense } from 'react'")) {
      detailContent = detailContent.replace("import { Suspense } from 'react'", "import { Suspense, lazy } from 'react'");
    }

    const lazyAnchor = '// Add new project lazy imports here ↑';
    const lazyStatement = `  '${cleanSlug}': lazy(() => import('@projects/${cleanSlug}/index')),\n  ${lazyAnchor}`;
    
    if (detailContent.includes(lazyAnchor)) {
      detailContent = detailContent.replace(lazyAnchor, lazyStatement);
      fs.writeFileSync(detailPath, detailContent, 'utf8');
      console.log(`✅ Registered lazy load in src/pages/ProjectDetail.jsx`);
    }
  }

  console.log(`\n🎉 Project '${title}' successfully created! Run your dev server to see it in action.`);
};

// Check for arguments
const args = process.argv.slice(2);
if (args[0]) {
  createProject(args[0]);
  rl.close();
} else {
  rl.question('Enter the new project slug (e.g. accordion or hello-world): ', (slug) => {
    if (!slug) {
      console.error('❌ Error: Slug cannot be empty.');
      process.exit(1);
    }
    createProject(slug);
    rl.close();
  });
}
