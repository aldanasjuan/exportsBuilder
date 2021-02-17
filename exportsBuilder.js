const folder = './';
const fs = require('fs');

let files = fs.readdirSync(testFolder).filter(e => e !== 'exportsBuilder.js')
let names = []
let imports = files.map(file => {
  let split =  file.split(".")
  let length = split.length
  let name = split.slice(0, length > 1 ? length - 1 : 1).join(".")
  names.push(name)
  return `import ${name} from './${file}' `
}).join("\n");
let result = `${imports} 
export { 
${names.map(n => `    ${n}`).join(",\n")} 
}`

fs.writeFileSync("./index.js", result)
