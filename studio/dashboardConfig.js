export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5e30431bb26a2c67ff40b0b7',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-2-studio-f8t2qh8r',
                  apiId: '91932716-758c-42af-9b07-3789594729da'
                },
                {
                  buildHookId: '5e30431bbd2243623fe0d137',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-2-web-fo7vijo2',
                  apiId: '3327158e-dc1b-4e81-bf1d-201f19c99c22'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/elmarnaliyev/sanity-nextjs-landing-pages-2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-2-web-fo7vijo2.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
