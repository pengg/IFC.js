import { newObject } from "../parser/parser-map.js";
import { namedProps as n } from "../../utils/global-constants.js";
import { ifcDataTypes as d } from "../../utils/ifc-data-types.js";
import { getName, ifcTypes as t } from "../../utils/ifc-types.js";

newObject({
  [n.ifcClass]: getName(t.IfcPropertySet),
  GlobalId: d.guid,
  OwnerHistory: d.id,
  Name: d.text,
  Description: d.text,
  HasProperties: d.idSet,
});

newObject({
  [n.ifcClass]: getName(t.IfcPropertySingleValue),
  Name: d.text,
  Description: d.text,
  NominalValue: d.value,
  Unit: d.id,
});

newObject({
  [n.ifcClass]: getName(t.IfcSpaceType),
  GlobalId: d.guid,
  OwnerHistory: d.id,
  Name: d.text,
  Description: d.text,
  ApplicableOccurrence: d.text,
  HasPropertySets: d.idSet,
  RepresentationMaps: d.idSet,
  Tag: d.text,
  ElementType: d.text,
  PredefinedType: d.enum,
});

newObject({
  [n.ifcClass]: getName(t.IfcColumnType),
  GlobalId: d.guid,
  OwnerHistory: d.id,
  Name: d.text,
  Description: d.text,
  ApplicableOccurrence: d.text,
  HasPropertySets: d.idSet,
  RepresentationMaps: d.idSet,
  Tag: d.text,
  ElementType: d.text,
  PredefinedType: d.enum,
});

newObject({
  [n.ifcClass]: getName(t.IfcPlateType),
  GlobalId: d.guid,
  OwnerHistory: d.id,
  Name: d.text,
  Description: d.text,
  ApplicableOccurrence: d.text,
  HasPropertySets: d.idSet,
  RepresentationMaps: d.idSet,
  Tag: d.text,
  ElementType: d.text,
  PredefinedType: d.enum,
});

newObject({
  [n.ifcClass]: getName(t.IfcMemberType),
  GlobalId: d.guid,
  OwnerHistory: d.id,
  Name: d.text,
  Description: d.text,
  ApplicableOccurrence: d.text,
  HasPropertySets: d.idSet,
  RepresentationMaps: d.idSet,
  Tag: d.text,
  ElementType: d.text,
  PredefinedType: d.enum,
});

newObject({
  [n.ifcClass]: getName(t.IfcWallType),
  GlobalId: d.guid,
  OwnerHistory: d.id,
  Name: d.text,
  Description: d.text,
  ApplicableOccurrence: d.text,
  HasPropertySets: d.idSet,
  RepresentationMaps: d.idSet,
  Tag: d.text,
  ElementType: d.text,
  PredefinedType: d.enum,
});

newObject({
  [n.ifcClass]: getName(t.IfcStairFlightType),
  GlobalId: d.guid,
  OwnerHistory: d.id,
  Name: d.text,
  Description: d.text,
  ApplicableOccurrence: d.text,
  HasPropertySets: d.idSet,
  RepresentationMaps: d.idSet,
  Tag: d.text,
  ElementType: d.text,
  PredefinedType: d.enum,
});

newObject({
  [n.ifcClass]: getName(t.IfcCurtainWallType),
  GlobalId: d.guid,
  OwnerHistory: d.id,
  Name: d.text,
  Description: d.text,
  ApplicableOccurrence: d.text,
  HasPropertySets: d.idSet,
  RepresentationMaps: d.idSet,
  Tag: d.text,
  ElementType: d.text,
  PredefinedType: d.enum,
});

newObject({
  [n.ifcClass]: getName(t.IfcFurnitureType),
  GlobalId: d.guid,
  OwnerHistory: d.id,
  Name: d.text,
  Description: d.text,
  ApplicableOccurrence: d.text,
  HasPropertySets: d.idSet,
  RepresentationMaps: d.idSet,
  Tag: d.text,
  ElementType: d.text,
  AssemblyPlace: d.enum,
});

newObject({
  [n.ifcClass]: getName(t.IfcSlabType),
  GlobalId: d.guid,
  OwnerHistory: d.id,
  Name: d.text,
  Description: d.text,
  ApplicableOccurrence: d.text,
  HasPropertySets: d.idSet,
  RepresentationMaps: d.idSet,
  Tag: d.text,
  ElementType: d.text,
  PredefinedType: d.enum,
});

newObject({
  [n.ifcClass]: getName(t.IfcBuildingElementProxyType),
  GlobalId: d.guid,
  OwnerHistory: d.id,
  Name: d.text,
  Description: d.text,
  ApplicableOccurrence: d.text,
  HasPropertySets: d.idSet,
  RepresentationMaps: d.idSet,
  Tag: d.text,
  ElementType: d.text,
  PredefinedType: d.enum,
});

newObject({
  [n.ifcClass]: getName(t.IfcSanitaryTerminalType),
  GlobalId: d.guid,
  OwnerHistory: d.id,
  Name: d.text,
  Description: d.text,
  ApplicableOccurrence: d.text,
  HasPropertySets: d.idSet,
  RepresentationMaps: d.idSet,
  Tag: d.text,
  ElementType: d.text,
  PredefinedType: d.enum,
});

newObject({
  [n.ifcClass]: getName(t.IfcDoorLiningProperties),
  GlobalId: d.guid,
  OwnerHistory: d.id,
  Name: d.text,
  Description: d.text,
  LiningDepth: d.number,
  LiningThickness: d.number,
  ThresholdDepth: d.number,
  ThresholdThickness: d.number,
  TransomThickness: d.number,
  TransomOffset: d.number,
  LiningOffset: d.number,
  ThresholdOffset: d.number,
  CasingThickness: d.number,
  CasingDepth: d.number,
  ShapeAspectStyle: d.id,
});

newObject({
  [n.ifcClass]: getName(t.IfcDoorPanelProperties),
  GlobalId: d.guid,
  OwnerHistory: d.id,
  Name: d.text,
  Description: d.text,
  PanelDepth: d.number,
  PanelOperation: d.enum,
  PanelWidth: d.value,
  PanelPosition: d.enum,
  ShapeAspectStyle: d.id,
});

newObject({
  [n.ifcClass]: getName(t.IfcDoorStyle),
  GlobalId: d.guid,
  OwnerHistory: d.id,
  Name: d.text,
  Description: d.text,
  ApplicableOccurrence: d.text,
  HasPropertySets: d.idSet,
  RepresentationMaps: d.idSet,
  Tag: d.text,
  OperationType: d.enum,
  ConstructionType: d.enum,
  ParameterTakesPrecedence: d.bool,
  Sizeable: d.bool,
});

newObject({
  [n.ifcClass]: getName(t.IfcWindowStyle),
  GlobalId: d.guid,
  OwnerHistory: d.id,
  Name: d.text,
  Description: d.text,
  ApplicableOccurrence: d.text,
  HasPropertySets: d.idSet,
  RepresentationMaps: d.idSet,
  Tag: d.text,
  ConstructionType: d.enum,
  OperationType: d.enum,
  ParameterTakesPrecedence: d.bool,
  Sizeable: d.bool,
});

newObject({
  [n.ifcClass]: getName(t.IfcWindowLiningProperties),
  GlobalId: d.guid,
  OwnerHistory: d.id,
  Name: d.text,
  Description: d.text,
  LiningDepth: d.number,
  LiningThickness: d.number,
  TransomThickness: d.number,
  MullionThickness: d.number,
  FirstTransomOffset: d.number,
  SecondTransomOffset: d.number,
  FirstMullionOffset: d.number,
  SecondMullionOffset: d.number,
  ShapeAspectStyle: d.number,
});