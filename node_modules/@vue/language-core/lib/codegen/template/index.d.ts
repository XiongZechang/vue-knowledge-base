import * as CompilerDOM from '@vue/compiler-dom';
import type * as ts from 'typescript';
import type { Code, Sfc, VueCompilerOptions } from '../../types';
export interface TemplateCodegenOptions {
    ts: typeof ts;
    compilerOptions: ts.CompilerOptions;
    vueCompilerOptions: VueCompilerOptions;
    template: NonNullable<Sfc['template']>;
    shouldGenerateScopedClasses?: boolean;
    stylesScopedClasses: Set<string>;
    hasDefineSlots?: boolean;
    slotsAssignName?: string;
    propsAssignName?: string;
}
export declare function generateTemplate(options: TemplateCodegenOptions): Generator<Code, {
    ctx: {
        slots: {
            name: string;
            loc?: number | undefined;
            tagRange: [number, number];
            varName: string;
            nodeLoc: any;
        }[];
        dynamicSlots: {
            expVar: string;
            varName: string;
        }[];
        codeFeatures: {
            all: import("../../types").VueCodeInformation;
            verification: import("../../types").VueCodeInformation;
            completion: import("../../types").VueCodeInformation;
            additionalCompletion: import("../../types").VueCodeInformation;
            navigation: import("../../types").VueCodeInformation;
            navigationAndCompletion: import("../../types").VueCodeInformation;
            withoutHighlight: import("../../types").VueCodeInformation;
            withoutHighlightAndCompletion: import("../../types").VueCodeInformation;
            withoutHighlightAndCompletionAndNavigation: import("../../types").VueCodeInformation;
        };
        accessGlobalVariables: Map<string, Set<number>>;
        hasSlotElements: Set<CompilerDOM.ElementNode>;
        blockConditions: string[];
        usedComponentCtxVars: Set<string>;
        scopedClasses: {
            className: string;
            offset: number;
        }[];
        accessGlobalVariable(name: string, offset?: number | undefined): void;
        hasLocalVariable: (name: string) => boolean;
        addLocalVariable: (name: string) => void;
        removeLocalVariable: (name: string) => void;
        getInternalVariable: () => string;
        ignoreError: () => Generator<Code, any, unknown>;
        expectError: (prevNode: CompilerDOM.CommentNode) => Generator<Code, any, unknown>;
        resetDirectiveComments: (endStr: string) => Generator<Code, any, unknown>;
        generateAutoImportCompletion: () => Generator<Code, any, unknown>;
    };
    hasSlot: boolean;
}, unknown>;
export declare function forEachElementNode(node: CompilerDOM.RootNode | CompilerDOM.TemplateChildNode): Generator<CompilerDOM.ElementNode>;
export declare function isFragment(node: CompilerDOM.IfNode | CompilerDOM.ForNode): boolean | undefined;
