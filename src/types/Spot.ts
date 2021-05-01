import { SpotType } from '../enums';

export interface Spot {
    id: string;
    type: SpotType;
    available?: boolean;
}
