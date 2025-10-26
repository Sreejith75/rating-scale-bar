/*
*This is auto generated from the ControlManifest.Input.xml file
*/

// Define IInputs and IOutputs Type. They should match with ControlManifest.
export interface IInputs {
    value: ComponentFramework.PropertyTypes.WholeNumberProperty;
    scale: ComponentFramework.PropertyTypes.EnumProperty<"5" | "10">;
    defaultValue: ComponentFramework.PropertyTypes.WholeNumberProperty;
}
export interface IOutputs {
    value?: number;
}
