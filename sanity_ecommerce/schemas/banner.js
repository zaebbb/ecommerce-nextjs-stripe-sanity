export default {
    name: 'banner',
    title: 'Баннер',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Изображение',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'buttonText',
            title: 'Текст кнопки',
            type: 'string'
        },
        {
            name: 'product',
            title: 'Продукт',
            type: 'string',
        },
        {
            name: 'desc',
            title: 'Описание',
            type: 'string'
        }, 
        {
            name: 'smallText',
            title: 'Маленький текст',
            type: 'string'
        },
        {
            name: 'midText',
            title: 'Срежний текст',
            type: 'string'
        },
        {
            name: 'largeText1',
            title: 'Большой текст 1',
            type: 'string'
        },
        {
            name: 'largeText2',
            title: 'Большой текст 2',
            type: 'string'
        },
        {
            name: 'discount',
            title: 'Скидка',
            type: 'string'
        },
        {
            name: 'saleTime',
            title: 'Время скидки',
            type: 'string'
        }
    ]
}