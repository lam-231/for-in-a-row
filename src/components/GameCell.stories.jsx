import GameCell from './GameCell';

export default {
    title: 'Components/Base/GameCell',
    component: GameCell,
    argTypes: {
        value: {
            control: 'radio',
            options: [null, 'red', 'yellow'],
            description: 'Значення клітинки (колір фішки)',
        },
        onClick: { action: 'clicked', description: 'Функція, що викликається при кліку' },
    },
};

export const Empty = {
    args: { value: null },
};

export const RedCoin = {
    args: { value: 'red' },
};

export const YellowCoin = {
    args: { value: 'yellow' },
};