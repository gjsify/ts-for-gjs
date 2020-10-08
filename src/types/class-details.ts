export interface ClassDetails {
    name: string
    qualifiedName: string
    parentName?: string
    qualifiedParentName?: string
    /** qualified if it's module != qualifiedName's module */
    localParentName?: string
}
