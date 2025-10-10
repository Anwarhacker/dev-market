const fs = require('fs');
const path = require('path');

// Fix unescaped entities
const fixUnescapedEntities = (content) => {
  return content
    .replace(/'/g, '&apos;')
    .replace(/"/g, '&quot;');
};

// Files to fix
const filesToFix = [
  'app/deploymentsetup/page.js',
  'app/gitsetup/page.js', 
  'app/mongoatlas/page.js',
  'app/nodejssetup/page.js',
  'app/vscodesetup/page.js',
  'app/cloudinarysetup/page.js',
  'app/projects/[id]/page.js'
];

filesToFix.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix specific patterns
    content = content.replace(/'/g, '&apos;');
    content = content.replace(/"/g, '&quot;');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${file}`);
  }
});

console.log('Lint fixes completed!');