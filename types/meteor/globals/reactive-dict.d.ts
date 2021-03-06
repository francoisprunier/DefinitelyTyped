declare var ReactiveDict: ReactiveDictStatic;
declare interface ReactiveDictStatic {
    new (name?: string, initialValue?: EJSONable): ReactiveDict;
}
declare interface ReactiveDict {
    setDefault(key: string, value?: EJSONableProperty): void;
    setDefault(object: EJSONable): void;
    set(key: string, value?: EJSONableProperty): void;
    set(object: EJSONable): void;
    get(key: string): EJSONableProperty;
    equals(key: string, value: string | number | boolean | undefined | null): boolean;
    all(): EJSONable;
    clear(): void;
    destroy(): void;
}
