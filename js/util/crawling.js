import { WebtoonInfoLink, WebtoonInfo } from "../shared/webtoon.js"; 

async function getHtml(baseUrl) {
    try {
        
        console.log("크롤링 시도");
        var url = "http://localhost:5001/get_html?url=" + baseUrl;
        console.log("url: " + url);
        const response = await fetch(url, { mode: "cors" });
        const data = await response.json();
        if (response.ok) {
            const html = data.html;
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, "text/html");
            return doc;
        }
    } catch (error) {
        console.log("크롤링 실패");
        throw error;
    }
}

async function crawlWebtoonInfoLink() { 
    var baseUrl = "https://namu.wiki/w/%EB%84%A4%EC%9D%B4%EB%B2%84%20%EC%9B%B9%ED%88%B0/%EC%97%B0%EC%9E%AC%20%EB%AA%A9%EB%A1%9D#s-2.1"
    var doc = await getHtml(baseUrl);
    
    var webtoonInfoLinkList = [];
    const tables = doc.querySelectorAll("div._5VUbIG9g.xI18pR7p > table ul li a");
    tables.forEach((table, index) => {
        if (index > 1) {
            webtoonInfoLinkList.push(
                new WebtoonInfoLink(table.title, baseUrl + table.href),
            );
        } 
    });


    return webtoonInfoLinkList;
}

async function crawlWebtoonInfoTable(webtoonInfoLink) {
    var doc = await getHtml(webtoonInfoLink);

    var webtoonInfoTable = [];
    const tables = doc.querySelectorAll("table._44onDq2H._96dce1fd5b899b7cc760c1f8e1bdb1c8 table");
    tables.forEach((table, index) => {
        if (index > 0) {
            console.log(table);
            // webtoonInfoTable.push(
            //     new WebtoonInfo(
                    
            //     )
            // )
        }
        
    })
}

async function crawlWebtoonInfo() {
    const webtoonInfoLinkList = await crawlWebtoonInfoLink();
    const promises = webtoonInfoLinkList.map(async (webtoonInfoLink) => {
        try {
            const webtoonInfoHtml = await crawlWebtoonInfoTable(webtoonInfoLink.href);

        }
        catch (error) {
            console.log("Error: ", error);
            throw error;
        }
    });
}

crawlWebtoonInfo();
