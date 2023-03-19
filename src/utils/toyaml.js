import YAML from 'yaml'
import yaml from 'js-yaml'
export function toyaml(json) {
    const doc = new YAML.Document();
    doc.contents = json;
    return doc.toString();
}
export function tojson(yaml_) {
    const json = yaml.load(yaml_) // YAML输出为 json 格式
    return json
}