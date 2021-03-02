module.exports = {
    plugins:[
        require("tailwindcss"),
        require("autoprefixer"),
        require("@fullhuman/postcss-purgecss")({
            content:[
                "./404.html",
                "./about.html",
                "./comingsoon.html",
                "./contact.html",
                "./index.html",
                "./privacy.html",
                "./products.html",
                "./user.html"
            ],
            defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g)||[]
        })
    ]
}