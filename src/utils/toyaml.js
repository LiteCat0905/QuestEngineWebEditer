import YAML from 'yaml'

export function toyaml (json) {
    const doc = new YAML.Document();
    doc.contents = json;
    return doc.toString();
    }