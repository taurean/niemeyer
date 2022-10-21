export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '635230d3381fa072da82801f',
                  title: 'Sanity Studio',
                  name: 'niemeyer-sanity-studio',
                  apiId: '31aec4d7-fd8d-484b-a576-96ccfc757df1'
                },
                {
                  buildHookId: '635230d3381fa0723e8281e2',
                  title: 'Blog Website',
                  name: 'niemeyer-sanity',
                  apiId: 'f98b0c11-09b7-4ee3-a5ec-8d5a52ed51c2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/taurean/niemeyer-sanity',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://niemeyer-sanity.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
