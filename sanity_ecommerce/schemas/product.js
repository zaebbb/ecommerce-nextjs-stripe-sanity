export default {
    name: 'product',
    title: "Продукт",
    type: 'document',
    fields: [
        {
            name: 'image',
            title: "Изображение",
            type: 'array',
            of: [{ type: 'image' }],
            options: { 
                hotspot: true 
            }
        },
        {
            name: 'name',
            title: "Имя продукта",
            type: "string"
        },
        {
            name: "slug",
            title: "Артикул",
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 90
            }
        },
        {
            name: 'price',
            title: 'Цена',
            type: 'number'
        },
        {
            name: 'details',
            title: 'Детали',
            type: 'text'
        }
    ]
}