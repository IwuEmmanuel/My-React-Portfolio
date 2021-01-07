/* eslint-disable import/no-anonymous-default-export */
export default {
    name:"project",
    title:"Project",
    type:"document",
    fields: [
        {
           name: "title",
           type: "string",
        },
        {
           name: "date",
           type: "datetime", 
        },
        {
           title: "GitRepo",
           name: "codeUrl",
           type: "url",
        },
        {
        name: 'mainImage',
        title: 'Main image',
        type: 'image',
        options: {
            hotspot: true,
          },
        },
        {
            title: "Live Preview",
            name: "hostedUrl",
            type:"url",
        }, 
        {
           name:"description",
           type: "text", 
        },
        {
            name: "projectType",
            title:"Project type",
            type: "string",
            options: {
                list: [
                    {value: "personal", title:"Personal"},
                    {value: "client", title:"Client"},
                ]
            }
        },
        {
          name:"tags",
          type:"array",
          of: [
              {
                  type:"string",
              },
          ],
          options: {
              layout:"tags",
          },
        },
    ],
};