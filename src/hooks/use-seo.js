const { graphql, useStaticQuery } = require("gatsby");

const useSeo = () => {

    const data = useStaticQuery(graphql`
    query {
        datoCmsSite {
            globalSeo {
                siteName
                titleSuffix
                fallbackSeo {
                    title
                    description
                }
                }
            }
    }
    `)

    return data.datoCmsSite.globalSeo;
}
 
export default useSeo;