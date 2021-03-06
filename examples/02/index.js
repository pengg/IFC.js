import { readIfcFile } from "../../src/ifc-file-reader.js";
import { loadIfcFileItems } from "../../src/ifc-parser/ifc-services/ifc-processor.js";
import { constructProject } from "../../src/ifc-project-builder/ifc-structure-builder.js";
import { buildGeometry } from "../../src/ifc-to-three.js/converter.js";
import { simpleBuilding2 } from "../../resources/ifcs/simple building 2.js";

readIfcFile();

main(simpleBuilding2);

function main(ifcData) {
  const loaded = loadIfcFileItems(ifcData);
  const structured = constructProject(loaded);
  buildGeometry(structured);
}

export { main };
