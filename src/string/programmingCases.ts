import { camelCase as _camelCase, startCase as _startCase } from "lodash";

export function PascalCase(string: string): string
{
    return _startCase(_camelCase(string)).replace(/ /g, '')
}
