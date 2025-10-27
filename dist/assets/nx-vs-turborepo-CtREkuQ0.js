import{j as e,M as i}from"./iframe-BNWelFxJ.js";import{useMDXComponents as t}from"./index-9xe-tnWN.js";import"./preload-helper-Dp1pzeXC.js";function o(r){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...t(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"General/Monorepos/Nx vs. Turborepo"}),`
`,e.jsx(n.h2,{id:"monorepo-comparison-nx-vs-turborepo",children:"Monorepo comparison: Nx vs. Turborepo"}),`
`,e.jsxs(n.p,{children:["This comparison between Nx and Turborepo based on various factors such as developer experience, community support, documentation, performance, etc. We aim to utilize a monorepo tool to facilitate the creation of our new UI library, ",e.jsx(n.code,{children:"Kosmos"}),"."]}),`
`,e.jsx(n.h3,{id:"package-based-and-integrated-approach",children:"Package-based and integrated approach"}),`
`,e.jsx(n.p,{children:"Before we start with the different features or aspects we should distinguish also the monorepos approaches Nx and Turborepo are providing."}),`
`,e.jsx(n.h4,{id:"package-based-approach",children:"Package-based approach"}),`
`,e.jsxs(n.p,{children:["Within a package based approach its more or less up to the developer ",e.jsx(n.strong,{children:"how to build and organize the entire folder structure"}),". There are nice and handy presets available from which devs can choose but in general, they have the flexibility to create the folder structure as needed."]}),`
`,e.jsx(n.h4,{id:"integrated-approach",children:"Integrated approach"}),`
`,e.jsx(n.p,{children:"On the other side the integrated approach don't provide that much flexibility. Opting for this approach entails a lot of pre-configuration and offers much more guidance through various plugins."}),`
`,e.jsx(n.p,{children:"Turborepo only provides the package-based approach whereas NX supports both."}),`
`,e.jsx(n.h3,{id:"developer-experience",children:"Developer experience"}),`
`,e.jsx(n.p,{children:"One of the most crucial things for chosing a monorepo tool is a good developer experience. Developers should quickly become familiar with the tool and should provide a smooth workflow to ensure it aids them in development without presenting any obstacles."}),`
`,e.jsx(n.h4,{id:"editor-plugin",children:"Editor plugin"}),`
`,e.jsx(n.h5,{id:"nx",children:"Nx"}),`
`,e.jsxs(n.p,{children:["Nx offers a plugin called ",e.jsx(n.a,{href:"https://nx.dev/features/integrate-with-editors",rel:"nofollow",children:"Nx console"})," which can be installed for Visual Studio Code and Jetbrains products. This UI helps you generating and managing your workspaces."]}),`
`,e.jsx(n.h5,{id:"turborepo",children:"Turborepo"}),`
`,e.jsx(n.p,{children:"For Turborepo there is no plugin available and currently there is also no plan to provide an editor plugin."}),`
`,e.jsx(n.h4,{id:"graph-visualisation",children:"Graph visualisation"}),`
`,e.jsx(n.p,{children:"This feature illustrates dependency relationships among apps and/or packages. You get an depencency graph overview how the projects are connected which each other. Futhermore, if you are changing something within a project, you get a visual overview which other projects/repos are affected by that changes."}),`
`,e.jsx(n.h5,{id:"nx-1",children:"Nx"}),`
`,e.jsx(n.p,{children:"NX provides a rich, interactive visualiser to filter and explore large monorepos. You can create the graph via Nx console or execute:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`pnpm nx graph
`})}),`
`,e.jsx(n.p,{children:"This command launches within a new browser window an interactive view of the projects within your Nx workspace. Also you can download them as PNG if needed."}),`
`,e.jsx(n.h5,{id:"turborepo-1",children:"Turborepo"}),`
`,e.jsxs(n.p,{children:["Turborepo provides a basic ",e.jsx(n.code,{children:"graphviz"})," image export to generate static image and/or HTML files. This approach is not interactive:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`turbo run build lint --graph=my-graph.svg or
turbo run build test --graph=my-graph.png
`})}),`
`,e.jsxs(n.p,{children:["These example commands generate an image which illustrates the project graph and dependencies within the root folder (for the build, lint and/or test step). ",e.jsx(n.a,{href:"https://turbo.build/repo/docs/reference/command-line-reference/run#--graph",rel:"nofollow",children:"Here you can see further graph options."})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Hint:"}),`
For executing this you maybe have to install `,e.jsx(n.code,{children:"graphviz"})," on your machine first."]}),`
`]}),`
`,e.jsx(n.h4,{id:"dependency-management",children:"Dependency management"}),`
`,e.jsx(n.h5,{id:"nx-2",children:"Nx"}),`
`,e.jsxs(n.p,{children:["The dependency management within NX happens on one central place (within the root ",e.jsx(n.code,{children:"package.json"})," file). With the following command:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`pnpm nx migrate latest
`})}),`
`,e.jsx(n.p,{children:"Nx will update all Nx plugins to the latest version. Which is a very helpful way of automatic updating your Nx dependencies."}),`
`,e.jsx(n.h5,{id:"turborepo-2",children:"Turborepo"}),`
`,e.jsxs(n.p,{children:["by default organizes dependencies on package level. Which means that every monorepo has its own ",e.jsx(n.code,{children:"package.json"})," file, where you can manage and update your dependencies."]}),`
`,e.jsx(n.p,{children:"Of course it depends on the personal experience of the developer and its a matter of taste what is prefered. Both approaches have their benefits and/or downsides."}),`
`,e.jsx(n.h4,{id:"documentation",children:"Documentation"}),`
`,e.jsx(n.p,{children:"Both have a good and detailed documentation. Maybe the NX documentation seems a little bit more comprehensive."}),`
`,e.jsx(n.h4,{id:"performance",children:"Performance"}),`
`,e.jsx(n.p,{children:"Measuring and comparing performance is very hard. It depends on different factors like the environment, CPU, etc. Nx is mostly written in Typescript, but some heavy computation in done by Node.js and Rust. Turborepo is mostly written in Golang and Rust."}),`
`,e.jsxs(n.p,{children:["For getting a good benchmark Nx created ",e.jsx(n.a,{href:"https://github.com/vsavkin/large-monorepo",rel:"nofollow",children:"this page"}),", where they compared three monorepo tools: Nx, Turborepo and ",e.jsx(n.a,{href:"https://microsoft.github.io/lage/",rel:"nofollow",children:"Lage"}),". They executed different test runs at different days and basically, Nx is ~7x faster than Turborepo and Lage."]}),`
`,e.jsx(n.p,{children:"Additionally, I did also a small comparison to get a better feeling of the performance of these tools. I used a small package to covert a bunch of JSON file by the help of Amazon Style Dictionary, to transform for different outputs."}),`
`,e.jsx(n.p,{children:"Here are the figures:"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Build step"}),e.jsx(n.th,{children:"Nx"}),e.jsx(n.th,{children:"Turborepo"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"1st run"}),e.jsx(n.td,{children:"2s"}),e.jsx(n.td,{children:"1.151 s"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"2nd run (with cache)"}),e.jsx(n.td,{children:"57ms"}),e.jsx(n.td,{children:"127 ms"})]})]})]}),`
`,e.jsx(n.p,{children:"Executing the build step for this task took at the first run with Turborepo the half of the time. However, the second run, supported with cache, Nx was a little bit faster. Of course this is not representative but at least we get a small insight how they perform."}),`
`,e.jsx(n.p,{children:"As you can see from the second run, both tools are using local computation caching. Which means, if nothing has changed since the last time, the result will be pulled from cache instead of building the same output again."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Local computation caching"})}),`
`,e.jsx(n.p,{children:"The difference here is that Turborepo always removes and recreates files on cache hits, which is not that optimal. Nx on the other hand knows what files have been restored and only re-build files that have changed."}),`
`,e.jsx(n.h4,{id:"community",children:"Community"}),`
`,e.jsx(n.p,{children:"Turborepo was released at the end of 2021 and Nx already in 2016. Which means, that the community behind had already 5 years more to grow. The whole ecosystem behind Nx is bigger, more mature and feature-rich, whereas the ecosystem of Turborepo is just a little bit to young."}),`
`,e.jsx(n.p,{children:"Here are some figures (status: 02/2024)"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{}),e.jsx(n.th,{children:"Stars on github"}),e.jsx(n.th,{children:"Github issues"}),e.jsx(n.th,{children:"Weekly downloads"}),e.jsx(n.th,{children:"Unpacked size"}),e.jsx(n.th,{children:"Installed size"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Nx"}),e.jsx(n.td,{children:"21.2k"}),e.jsx(n.td,{children:"749"}),e.jsx(n.td,{children:"4M"}),e.jsx(n.td,{children:"3.76MB"}),e.jsx(n.td,{children:"21.2MB"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Turborepo"}),e.jsx(n.td,{children:"24.2k"}),e.jsx(n.td,{children:"205"}),e.jsx(n.td,{children:"2M"}),e.jsx(n.td,{children:"29.9kB"}),e.jsx(n.td,{children:"21.2MB"})]})]})]}),`
`,e.jsxs(n.p,{children:["The figures are collected from NPM, Github and ",e.jsx(n.a,{href:"https://packagephobia.com",rel:"nofollow",children:"packagephobia"}),"."]}),`
`,e.jsx(n.h4,{id:"personal-user-experience",children:"Personal user experience"}),`
`,e.jsx(n.p,{children:"After working with both monorepos for some time, arriving at a final decision proves challenging. Both tools perform very well and doing a great job. Here's my subjective perspective:"}),`
`,e.jsx(n.p,{children:"Turborepo has definitively an easier learning curve und its more flexible regarding setting things up. Its straightforward to start with a small project. Nx on the other side seems more cumbersome and it is harder to get used to it."}),`
`,e.jsx(n.p,{children:"Both libraries demonstrate rapid performance in building and executing tasks. Personally, I feel that Turborepo provides a little bit better developer experience then Nx. Its seems cleaner and more streamlined, but this is just a gut feeling."}),`
`,e.jsxs(n.p,{children:["On the other side, NX has a great package support (React, Node, Cypress, etc.), see ",e.jsx(n.a,{href:"https://nx.dev/nx-api",rel:"nofollow",children:"https://nx.dev/nx-api"}),". Turborepo also has some starter-kits but they are overseeable and not that extensive."]}),`
`,e.jsxs(n.p,{children:["If you choose one of the supported packages, NX provides you already a predefined command structure with a ",e.jsx(n.code,{children:"build"}),", ",e.jsx(n.code,{children:"serve"}),", ",e.jsx(n.code,{children:"lint"})," and ",e.jsx(n.code,{children:"test"})," command (within ",e.jsx(n.code,{children:"project.json"})," file). Turborepo also provides some global pipeline commands (within the ",e.jsx(n.code,{children:"turbo.json"})," file). Additionally, you can add custom scripts by yourself if needed on monorepo basis within the package.json file."]}),`
`,e.jsx(n.p,{children:"The selection between these two tools depends on various factors. However, there's a sense that if a more structured approach is essential, NX offers the requisite plugins to guide developers effectively. Conversely, for projects requiring greater flexibility with only a limited number of monorepos, Turborepo may emerge as the preferred solution."}),`
`,e.jsx(n.h4,{id:"summary",children:"Summary"}),`
`,e.jsx(n.h5,{id:"turborepo-3",children:"Turborepo"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Lightweight and easy to learn"}),`
`,e.jsx(n.li,{children:"Organizes dependencies on package level"}),`
`,e.jsx(n.li,{children:"Less strict, more adoptable to existing repository"}),`
`,e.jsx(n.li,{children:"Great for NextJS, React, TS and JS"}),`
`,e.jsx(n.li,{children:"Great support and working together with NextJS (powered by Vercel), but other build systems are also supported (vite, etc.)"}),`
`,e.jsx(n.li,{children:"Monorepo build tool for JS and TS - optimized for these, but no support for other languages"}),`
`,e.jsx(n.li,{children:"Relies on other tools - use package manager for deps and workspace management (yarn, npm, pnpm) that devs know from daily work"}),`
`]}),`
`,e.jsx(n.h5,{id:"nx-3",children:"NX"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Steeper learning curve"}),`
`,e.jsx(n.li,{children:"Centralized dependency management"}),`
`,e.jsx(n.li,{children:"Rich interactive graph visualizer"}),`
`,e.jsx(n.li,{children:"Migration process from Turborepo to Nx"}),`
`,e.jsx(n.li,{children:"Provides a handy editor plugin"}),`
`,e.jsx(n.li,{children:"Great package (React, Node.js, etc.) and CI (Github Actions and Circle CI) support"}),`
`]}),`
`,e.jsx(n.p,{children:"Nx provides a monorepo-style development experience for large-scale projects. Turborepo also suits for large projects but it's more of a performance optimization tool."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"To sum it up"}),": Choosing the right tool depends on project size, goals, performance needs, etc. Nx provides a comprehensive solution for managing dependencies, maintaining code quality, and keeping builds fast. On the other hand, if performance optimization is the main concern, Turborepo may provide a quicker and more focused solution."]}),`
`,e.jsx(n.h3,{id:"further-information--resources",children:"Further information & resources"}),`
`,e.jsx(n.p,{children:"The following articles are the basis of this comparison. If interested, you can find more information there:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://turbo.build/repo/docs",rel:"nofollow",children:"Turborepo docs"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://nx.dev/getting-started/intro",rel:"nofollow",children:"Nx docs"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://nx.dev/concepts/more-concepts/turbo-and-nx",rel:"nofollow",children:"Comparison Nx and Turborepo"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://medium.com/@knidarkness/nx-dev-vs-turborepo-for-a-green-field-projects-in-2022-c73dd858b687",rel:"nofollow",children:"Choosing monorepo tooling"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://javascript.plainenglish.io/sharing-typescript-with-nx-and-turborepo-part-1-introduction-to-monorepos-d8d54b805e46#74a6",rel:"nofollow",children:"Overview of Nx and Turborepo"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://devspedia.com/streamlining-your-dev-workflow-the-benefits-and-limitations-of-nx-vs-turbo-repo",rel:"nofollow",children:"The Benefits and Limitations of Nx vs Turbo Repo"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://monorepo.tools/#monorepo-features",rel:"nofollow",children:"Monorepo features"})}),`
`]})]})}function d(r={}){const{wrapper:n}={...t(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(o,{...r})}):o(r)}export{d as default};
