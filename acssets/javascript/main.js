// const $$ = document.querySelectorAll.bind(document);
// const $ = document.querySelector.bind(document);

const itemSoftware = document.getElementById('software');
const itemOS = document.getElementById('os');
const itemOffice = document.getElementById('office');
const itemTools = document.getElementById('tools');
const showSearch = document.getElementById('menu-search');


const app = {
    //LIST ITEM 
    softWare: [
        {
            versionName: "Brave",
            img: "./acssets/img/logo-item/SoftWare/Browser/Brave.png",
            detail: "browser",
            path: "https://brave-br.com/?url=https://brave.com/playlist/&id=5"
        },
        {
            versionName: "Cốc Cốc",
            img: "./acssets/img/logo-item/SoftWare/Browser/CocCoc.png",
            detail: "browser",
            path: "https://coccoc.com/"
        },
        {
            versionName: "Microsoft EDGE",
            img: "./acssets/img/logo-item/SoftWare/Browser/Edge.png",
            detail: "browser",
            path: "https://www.microsoft.com/vi-vn/edge?form=MA13FJ"
        },
        {
            versionName: "Chrome",
            img: "./acssets/img/logo-item/SoftWare/Browser/GoogleChrome.png",
            detail: "browser",
            path: "https://www.google.com/intl/vi_vn/chrome/"
        },
        {
            versionName: "Opera",
            img: "./acssets/img/logo-item/SoftWare/Browser/Opera.png",
            detail: "browser",
            path: "https://www.opera.com/vi/download"
        },
        //tien ích
        {
            versionName: "Bandicam",
            img: "./acssets/img/logo-item/SoftWare/Utilities/Bandicam.png",
            detail: "Utilities",
            path: "./acssets/details/bandicam/detail-bdcam.html"
        },
        {
            versionName: "CapCut PC",
            img: "./acssets/img/logo-item/SoftWare/Utilities/CapCut.png",
            detail: "Utilities",
            path: "https://drive.google.com/file/d/1Yccx8BcaunfhB1YDhcom6bRcxHbc8vfl/view?usp=share_link"
        },
        {
            versionName: "Winrar",
            img: "./acssets/img/logo-item/SoftWare/Utilities/WinRar.png",
            detail: "Utilities",
            path: "https://drive.google.com/file/d/1qZ0YaZ-L-vCSBWWh770fZRo3bL-RD4Xa/view?usp=share_link"
        },
        {
            versionName: "Ultra Viewer",
            img: "./acssets/img/logo-item/SoftWare/Utilities/UltraViewer.png",
            detail: "Utilities",
            path: "https://www.ultraviewer.net/vi/download.html"
        },
        {
            versionName: "TeamViewer",
            img: "./acssets/img/logo-item/SoftWare/Utilities/TeamViewer.webp",
            detail: "Utilities",
            path: "https://www.teamviewer.com/en/teamviewer-automatic-download/?utm_source=google&utm_medium=cpc&utm_campaign=asean%7Cb%7Cpr%7C22%7Csep%7Ctv-core-brand-only-sn%7Cnew%7Ct0%7C0&utm_content=Exact&utm_term=teamviewer&gclid=CjwKCAiAvK2bBhB8EiwAZUbP1CZ513-X4BKtM0opsK0LDsfFSwk5EhgN9KgsHpJ8CZ3Yd-Y8fa5jghoCWYoQAvD_BwE"
        },
        {
            versionName: "Microsoft Teams",
            img: "./acssets/img/logo-item/SoftWare/Utilities/MSTeams.png",
            detail: "Utilities",
            path: "https://www.microsoft.com/vi-vn/microsoft-teams/download-app#desktopAppDownloadregion"
        },
        {
            versionName: "Itunes",
            img: "./acssets/img/logo-item/SoftWare/Utilities/ITunes.png",
            detail: "Utilities",
            path: "https://drive.google.com/file/d/1c0Bg0y4wptFUeyaeytplFOxF5GPSrw7L/view?usp=share_link"
        },
        {
            versionName: "Internet Download Manager",
            img: "./acssets/img/logo-item/SoftWare/Utilities/IDM.png",
            detail: "Utilities",
            path: "./acssets/details/IDM-active/detail_IDM.html"
        },
        {
            versionName: "Zalo",
            img: "./acssets/img/logo-item/SoftWare/Utilities/Zalo.webp",
            detail: "Utilities",
            path: "https://zalo.me/pc"
        },
        {
            versionName: "Win To USB",
            img: "./acssets/img/logo-item/SoftWare/Utilities/WinToUSB.webp",
            detail: "Utilities",
            path: "./acssets/details/Win_to_USB/detail_Win_to_usb.html"
        },
        {
            versionName: "Your Unistaller",
            img: "./acssets/img/logo-item/SoftWare/Utilities/YourUnistaller.jpg",
            detail: "Utilities",
            path: "https://drive.google.com/file/d/1cycqYoysX24i_oMtbPGi6-4KC3cmkC3w/view?usp=share_link"
        },
        {
            versionName: "Rufus",
            img: "./acssets/img/logo-item/SoftWare/Utilities/Rufus.png",
            detail: "Utilities",
            path: "https://drive.google.com/file/d/195eVCzTr0Oregzsc0dmpIQeNhT99ygju/view?usp=share_link"
        },
        {
            versionName: "CPU Z",
            img: "./acssets/img/logo-item/SoftWare/Utilities/CpuZ.svg",
            detail: "Utilities",
            path: "https://drive.google.com/file/d/1RklvKnRAjZsaa8F7plPEFQ0XRWQGrD8U/view?usp=share_link"
        },
        //learn dev
        {
            versionName: "Code Block",
            img: "./acssets/img/logo-item/SoftWare/LearnDEV/CodeBlock.png",
            detail: "Learn-DEV",
            path: "https://drive.google.com/file/d/1pT4ox1LuAGAfCJQmdzCICvTlQl7UgENG/view?usp=share_link"
        },
        {
            versionName: "Visual Studio Code",
            img: "./acssets/img/logo-item/SoftWare/LearnDEV/VisualStudioCode.png",
            detail: "Learn-DEV",
            path: "https://code.visualstudio.com/download"
        },
        {
            versionName: "Subline Text",
            img: "./acssets/img/logo-item/SoftWare/LearnDEV/sublineText.png",
            detail: "Learn-DEV",
            path: "https://www.sublimetext.com/download"
        },
        {
            versionName: "VM Ware",
            img: "./acssets/img/logo-item/SoftWare/LearnDEV/Vmware.png",
            detail: "Learn-DEV",
            path: "https://drive.google.com/file/d/1P3EuvcZFi3EPq_4KH2WS9Iqmdkc1g1hy/view?usp=share_link"
        },
        {
            versionName: "Safe Exam Browser",
            img: "./acssets/img/logo-item/SoftWare/LearnDEV/seb.png",
            detail: "Learn-DEV",
            path: "https://drive.google.com/file/d/186K35vXgYEwA3hc8pBUT0-ExOX5lgp10/view?usp=share_link"
        },
    ],
    OS: [
        {
            versionName: "Linux Ubuntu",
            img: "./acssets/img/logo-item/Windows/ubuntu.png",
            detail: "22.04.1_64",
            path: "https://drive.google.com/file/d/1VOky0w43lt2InfJ_eHJZfrzmIcR3Pe9k/view?usp=share_link"
        },
        {
            versionName: "Windows 7",
            img: "./acssets/img/logo-item/Windows/Win7.png",
            detail: "Windows 7",
            path: "https://drive.google.com/file/d/1PIzB8kQAtiO3bCEDTESBMEHBipY25H8_/view?usp=share_link"
        },
        {
            versionName: "Windows 10",
            img: "./acssets/img/logo-item/Windows/Win10.png",
            detail: "Ghost LTSB",
            path: "https://drive.google.com/file/d/1krPHA2JsPMLJGvTtT5M2GkQ92n63BzH6/view?usp=share_link"
        },
        {
            versionName: "Windows 10",
            img: "./acssets/img/logo-item/Windows/Win10.png",
            detail: "1809_x64",
            path: "https://drive.google.com/file/d/12D5BYpAlJiE11FYbNMmzjse1avfatPMk/view?usp=share_link"
        },
        {
            versionName: "Windows 10",
            img: "./acssets/img/logo-item/Windows/Win10.png",
            detail: "21h1_x64",
            path: "https://drive.google.com/file/d/1z0BA97PFyVhYPLm0bRUZemK03dfCVjbd/view?usp=share_link"
        },
        {
            versionName: "Windows 11",
            img: "./acssets/img/logo-item/Windows/Win11.png",
            detail: "21h1 bypass",
            path: "https://drive.google.com/file/d/1U2md9uYLfP7hDELZRNfF7v5U8jupQ5O1/view?usp=share_link"
        },
        {
            versionName: "Windows 11",
            img: "./acssets/img/logo-item/Windows/Win11.png",
            detail: "22h2 original",
            path: "https://drive.google.com/file/d/1dXs9gB3NiPTXz9_OtMzM0TRym_c41gZ_/view?usp=share_link"
        },
        {
            versionName: "Windows 11",
            img: "./acssets/img/logo-item/Windows/Win11.png",
            detail: "22h2 consumer-editions",
            path: "https://drive.google.com/file/d/1oEWU5AB0BzFF17S885BwiT6T5xBPg_gC/view?usp=share_link"
        },
        {
            versionName: "Windows Server 2012",
            img: "./acssets/img/logo-item/Windows/WinServer2012R2.png",
            detail: "Server 2012R2",
            path: "https://drive.google.com/file/d/1tOXdyQCbIN5ZQzM-fshttBw3ScYL2jFc/view?usp=share_link"
        },
        {
            versionName: "Windows All In One",
            img: "./acssets/img/logo-item/Windows/WindowsAllInOne.jpg",
            detail: "48 in 1(7 to 11 )",
            path: "https://drive.google.com/file/d/1oasaXPU6jY2iRmsMYXici_msBHITRUA8/view?usp=share_link"
        },
    ],
    office: [
        {
            versionName: "Microsoft Office 2016",
            img: "./acssets/img/logo-item/Office/office2016.png",
            detail: "Lang VIE",
            path: "https://drive.google.com/file/d/1ngPM--8uq6B9w4Ld-VdpmBKANAOPq7CO/view?usp=share_link"
        },
        {
            versionName: "Microsoft Office 2019",
            img: "./acssets/img/logo-item/Office/Office2019.png",
            detail: "Office 2019",
            path: "https://drive.google.com/file/d/1CPxPGCgqKcNkA2Amfx9daOEXRFOAaBYP/view?usp=share_link"
        },
        {
            versionName: "Microsoft Office 365",
            img: "./acssets/img/logo-item/Office/Office365.jpg",
            detail: "Lang ENG(.exe)",
            path: "https://drive.google.com/file/d/1wkqwUl-oHw85pM-Aq1_oTwWY2y36JHuF/view?usp=share_link"
        },
    ],
    tools: [
        {
            versionName: "Activate AIO Tools",
            img: "./acssets/img/logo-item/Tools/cmd.png",
            detail: "win, office",
            path: "./acssets/details/AIO/detail_AIO.html"
        },
        {
            versionName: "Control Sercurity",
            img: "./acssets/img/logo-item/Tools/DControl.webp",
            detail: "on-off wdf",
            path: "https://1drv.ms/u/s!Aicejqv-neAYhRjA2XawuDOGriwg?e=Kv2ipa"
        },
       
    ],
    

    render: function() {

        //render list software
        const software = this.softWare.map((itemSW) => {
            return`
                    <div class ="col-6 col-sm-4 col-md-3 p-3">
                    
                        <div class="d-flex flex-column text-center border height100">
                            <div class="card">
                                <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                    <img src="${itemSW.img}" class="img-fluid"/>
                                    <a href="#!">
                                        <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                                    </a>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title text-nowrap text-truncate">${itemSW.versionName}</h5>
                                    <p class="card-text text-truncate">${itemSW.detail}</p>
                                    <a href="${itemSW.path}" target="_blank" class="btn btn-primary">Download</a>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
        });
        itemSoftware.innerHTML = software.join("");

        //render list Windows
        const OS = this.OS.map((itemOS) => {
            return`
                    <div class ="col-6 col-sm-4 col-md-3 p-3 ">
                                
                        <div class="d-flex flex-column text-center border height100">
                            <div class="card">
                                <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                    <img src="${itemOS.img}" class="img-fluid"/>
                                    <a href="#!">
                                        <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                                    </a>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title text-nowrap text-truncate">${itemOS.versionName}</h5>
                                    <p class="card-text text-truncate">${itemOS.detail}</p>
                                    <a href="${itemOS.path}" target="_blank" class="btn btn-primary">Download</a>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
        });
        itemOS.innerHTML = OS.join("");

        //render list office
        const office = this.office.map((itemOF) => {
            return`
                    <div class ="col-6 col-sm-4 col-md-3 p-2">
                    
                        <div class="d-flex flex-column text-center border height100">
                            <div class="card">
                                <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                    <img src="${itemOF.img}" class="img-fluid"/>
                                    <a href="#!">
                                        <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                                    </a>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title text-nowrap text-truncate">${itemOF.versionName}</h5>
                                    <p class="card-text text-truncate">${itemOF.detail}</p>
                                    <a href="${itemOF.path}" target="_blank" class="btn btn-primary">Download</a>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
        });
        itemOffice.innerHTML = office.join("");

        //render list tools
        const tools = this.tools.map((itemT) => {
            return`
                    <div class ="col-6 col-sm-4 col-md-3 p-2">
                    
                        <div class="d-flex flex-column text-center border height100">
                            <div class="card">
                                <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                    <img src="${itemT.img}" class="img-fluid"/>
                                    <a href="#!">
                                        <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                                    </a>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title text-nowrap text-truncate">${itemT.versionName}</h5>
                                    <p class="card-text text-truncate">${itemT.detail}</p>
                                    <a href="${itemT.path}" target="_blank" class="btn btn-primary">Download</a>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
        });
        itemTools.innerHTML = tools.join("");
    },
    start: function (){
        this.render();
    }
};
app.start();



var curDate = new Date();
var curDay = curDate.getDate();
var curMonth = curDate.getMonth() + 1;
var curYear = curDate.getFullYear();
if(curDay < 10) {
    curDay = "0" + curDay;
    }
    if(curMonth < 10) {
        curMonth = "0" + curMonth;
    }
    

// Gán vào thẻ HTML
document.getElementById('current-time').innerHTML = curDay + "/" + curMonth + "/" + curYear;

function hvn(){
    var time = new Date();
    var hour = time.getHours();
    var minute = time.getMinutes();
    var second = time.getSeconds();
    if(hour < 10) {
        hour = "0" + hour;
    }
    if(minute < 10) {
        minute = "0" + minute;
    }
    if(second < 10) {
        second = "0" + second;
    }
    document.getElementById("hvn").innerHTML = hour + ":" + minute + ":" + second;   
}                                                                
setInterval("hvn()",1000);


function searchItem(){
    let valueSearchInput = document.getElementById("search-bar").value

    let softwareSearch = app.softWare.filter(value => {
        return value.versionName.toUpperCase().includes(valueSearchInput.toUpperCase())
    })

    let osSearch = app.OS.filter(value => {
        return value.versionName.toUpperCase().includes(valueSearchInput.toUpperCase())
    })
    

    let officeSearch = app.office.filter(value => {
        return value.versionName.toUpperCase().includes(valueSearchInput.toUpperCase())
    })
    

    let toolsSearch = app.tools.filter(value => {
        return value.versionName.toUpperCase().includes(valueSearchInput.toUpperCase())
    })

    var allArray = softwareSearch.concat(osSearch, officeSearch, toolsSearch)
//     console.log(allArray)

    if(allArray.length > 0){
        const itemSearch = allArray.map((item) => {
            return`
                <a class="item-search" title="${item.versionName +"-"+ item.detail}" target="_blank" href="${item.path}">
                    <img src="${item.img}" alt="" class="img-search">
                    <h5 class="name-search text-truncate">${item.versionName}</h5>
                </a>
                `;
        });
        showSearch.innerHTML = itemSearch.join("");

    }
    else{
        showSearch.innerHTML = `<div class="not-found">No Results</div>`
    }
}


