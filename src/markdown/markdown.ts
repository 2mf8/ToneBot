export class MarkDown{
    public markdown: string[]

    constructor(){
        this.markdown = []
    }

    static builder(): MarkDown {
        return new MarkDown()
    }

    mqqApi(content: string): MarkDown {
        let str = `\\n[${content}](mqqapi://aio/inlinecmd?command=${content}&reply=false&enter=false)` 
        this.markdown.push(str)
        return this
    }

    mqqApiAuto(content: string): MarkDown {
        let str = `\\n[${content}](mqqapi://aio/inlinecmd?command=${content}&reply=false&enter=true)` 
        this.markdown.push(str)
        return this
    }

    mqqApiAt(nickname: string, tinyId: number): MarkDown {
        let str = `\\n[@${nickname}](mqqapi://markdown/mention?at_type=1&at_tinyid=${tinyId})` 
        this.markdown.push(str)
        return this
    }

    mqqApiAtToProfile(nickname: string, tinyId: number): MarkDown {
        let str = `\\n[@${nickname}](mqqapi://card/show_pslcard?src_type=internal&version=1&uin=${tinyId}&crad_type=friend&source=qrcode)`
        this.markdown.push(str)
        return this
    }

    url(name: string, webUrl: string) {
        let str = `\\n[🔗${name}](${webUrl})`
        this.markdown.push(str)
        return this
    }

    h1(content: string):MarkDown{
        let str = `\\n# ${content}`
        this.markdown.push(str)
        return this
    }

    h2(content: string):MarkDown{
        let str = `\\n## ${content}`
        this.markdown.push(str)
        return this
    }

    h3(content: string):MarkDown{
        let str = `\\n### ${content}`
        this.markdown.push(str)
        return this
    }

    deleteLine (content: string):MarkDown{
        let str = `~~${content}~~`
        this.markdown.push(str)
        return this
    }

    bold (content: string):MarkDown{
        let str = `**${content}** `
        this.markdown.push(str)
        return this
    }

    italic (content: string):MarkDown{
        let str = `*${content}* `
        this.markdown.push(str)
        return this
    }

    italicBold (content: string):MarkDown{
        let str = `***${content}*** `
        this.markdown.push(str)
        return this
    }

    blockReference (content: string):MarkDown{
        let str = `\\n> ${content}\\n`
        this.markdown.push(str)
        return this
    }

    image(text: string, url: string, width: number, height: number):MarkDown {
        let str = `\\n![${text} #${width}px #${height}px](${url})`
        this.markdown.push(str)
        return this
    }

    dividerLine(): MarkDown {
        let str = `\\n ---\\n`
        this.markdown.push(str)
        return this
    }

    text(content: string): MarkDown {
        this.markdown.push(content)
        return this
    }

    newLine(): MarkDown {
        let str = `\\n`
        this.markdown.push(str)
        return this
    }

    code (content: string): MarkDown {
        let str = content.replace("\t", "\\t").replace("\n", "\\n").replace(`"`, `\\\"`)
        this.markdown.push(str)
        return this
    }
}