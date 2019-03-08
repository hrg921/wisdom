const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
        const relativeFilePath = createFilePath({
            node,
            getNode,
            basePath: "content/",
        })
        const category = relativeFilePath.split("/")[1];
        const slug = createFilePath({ node, getNode, basePath: `content/` });

        createNodeField({
            node,
            name: `category`,
            value: category
        })
        console.log("slug: " + slug);
    }
}
