declare class EnumExtension {
    static getNamesAndValues(e: any): {
        name: string;
        value: number;
    }[];
    static getNames(e: any): string[];
    static getValues(e: any): number[];
    private static getObjValues(e);
}
export = EnumExtension;
