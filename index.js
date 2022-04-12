document.body.onload = renderResume;

const EVT_toggleTag = "EVT_toggleTag"
const EVT_toggleHideItem = "EVT_toggleHideItem"
const EVT_toggleHideExp = "EVT_toggleHideExp"

var DOMUtils = {
    createDiv: (...classNames) => {
        let div = document.createElement('div')
        classNames.forEach(cls => {
            div.classList.add(cls)
        });
        return div
    },
    createTextDiv: (text, ...classNames) => {
        let div = DOMUtils.createDiv(...classNames)
        div.innerText = text
        return div
    },
    hideIfChildrenAreHidden: (elem, childrenContainerClass, childClass) => {
        // means all children are hidden
        let container = elem.querySelector(childrenContainerClass)
        if (container.children.length == container.querySelectorAll(`${childClass}.hidden`).length){
            elem.classList.add('hidden')
        }
        else {
            elem.classList.remove('hidden')
        }
    },
    createIcon: (iconClass, ...classes) => {
        let iconElem = document.createElement('i')
        iconElem.classList.add('fa', iconClass, ...classes)
        return iconElem
    }
}

var DateUtils = {
    getDateStr: (start, end) => {
        
        let duration = DateUtils.getDurationStr(start, end)
        let startEnd = DateUtils.getStartEndStr(start, end)
        let ret = startEnd
        if(duration) ret = `${ret} (${duration})`
        return ret
    },
    getDurationStr: (start, end) => {
        let month = 30 * 24 * 60 * 60 * 1000
        let dur = (new Date(end)).getTime() - (new Date(start)).getTime()
        let months = Math.round(dur / month)
        if(months < 1) return null
        let years = Math.floor(months/12)
        if(years > 0) {
            years = Math.round(months/12)
            return `${years}yr${years > 1 ? 's' : ''}`
        }
        else return `${months}m`
    },
    getStartEndStr: (start, end) => {
        let startYear = (new Date(start)).getFullYear()
        let endYear = (new Date(end)).getFullYear()
        if(startYear == endYear) return endYear
        else return `${startYear} - ${endYear}`
    }
}

function getIcon(type) {
    return {
        'github': 'fa-github',
        'stackoverflow': 'fa-stack-overflow',
        'linkedin': 'fa-linkedin',
        'email': 'fa-at',
        'website': 'fa-link',
    }[type]
}


var DomCV = {
    // CV Link
    /**
     * sample link = {
            "type": "github",
            "text": "mohganji",
            "url": "https://github.com/MohGanji"
        } // if no text is given, type will be used.
     */
    createCVLink: (link) => {
        // <a class="cv-link" onclick=url>
        //     TODO: <span class="cv-link-icon"></span>
        //     text
        // </a> 
        let linkElem = document.createElement('a')
        linkElem.classList.add('cv-link')
        linkElem.href = link.url
        let text = link.type //link.text ? link.text : link.type
        let icon = getIcon(link.type)
        let iconElem = DOMUtils.createIcon(icon, 'cv-link-icon') 
        linkElem.appendChild(iconElem)
        linkElem.appendChild(DOMUtils.createTextDiv(text, 'cv-link-text'))

        return linkElem
    },

    // CV Section
    /**
     * sample section = {
            "title": "Work Experience",
            "experiences": exp[]
        }
     */
    createCvSection: (section) => {
        // <div class="cv-section">
        //     <div class="cv-section-title">Work Experience</div>
        //     <hr>
        //     <div class="cv-exps">
        //         <div class="cv-exp"></div>
        //     </div>
        // </div>

        let sectionElem = DOMUtils.createDiv('cv-section')
        sectionElem.addEventListener(EVT_toggleHideExp, (event) => {
            DOMUtils.hideIfChildrenAreHidden(event.target, '.cv-exps', '.cv-exp')
        })
        
        let titleContainer = DOMUtils.createDiv('cv-section-header')
        let title = DOMUtils.createTextDiv(section.title, 'cv-section-title')
        titleContainer.appendChild(title)
        titleContainer.appendChild(document.createElement('hr'))
        sectionElem.appendChild(titleContainer)
        
        let expsContainer = DOMUtils.createDiv('cv-exps')
        let expElems = section.experiences?.map(DomCV.createCvExperience)
        expElems?.forEach(expElem => {
            expsContainer.appendChild(expElem)
        });
        sectionElem.appendChild(expsContainer)
        return sectionElem
    },
    
    // CV Experience
    /**
     * sample exp = {
            "title": "Yektanet",
            "subtitle": "The largest digital ad company in Iran",
            "role": "Software engineer",
            "start": "2019-12-01",
            "end": "2020-12-01",
            "location": "IR",
            "items": cvRowItem[]
        },
     */
    createCvExperience: (exp) => {
        // <div class="cv-exp">
        //     <div class="cv-exp-head-top">
        //         <div class="cv-exp-title">Yektanet</div>
        //         <div class="cv-exp-date">2019 - 2020 (1yr)</div>
        //     </div>
        //     <div class="cv-exp-head-bottom">
        //         <div class="cv-exp-subtitle">The largest folan</div>
        //         <div class="cv-exp-location">IR</div>
        //     </div>
        //     <div class="cv-exp-items">
        //         <div class="cv-exp-item"></div>
        //     </div>
        // </div>
        let expElem = DOMUtils.createDiv('cv-exp')
        expElem.addEventListener(EVT_toggleHideItem, (event) => {
            DOMUtils.hideIfChildrenAreHidden(event.target, '.cv-exp-items', '.cv-exp-item')
            event.target.closest('.cv-section').dispatchEvent(new Event(EVT_toggleHideExp))
        })
        
        let headTopElem = DOMUtils.createDiv('cv-exp-head-top')
        headTopElem.appendChild(DOMUtils.createTextDiv(exp.title, 'cv-exp-title'))
        let dateStr = DateUtils.getDateStr(exp.start, exp.end)
        headTopElem.appendChild(DOMUtils.createTextDiv(dateStr, 'cv-exp-date'))
        expElem.appendChild(headTopElem)
        
        let headBottomElem = DOMUtils.createDiv('cv-exp-head-bottom')
        headBottomElem.appendChild(DOMUtils.createTextDiv(exp.subtitle, 'cv-exp-subtitle'))
        headBottomElem.appendChild(DOMUtils.createTextDiv(exp.location, 'cv-exp-location'))
        expElem.appendChild(headBottomElem)

        let itemsContainer = DOMUtils.createDiv('cv-exp-items')
        let itemElems = exp.items?.map(DomCV.createCvItem)
        itemElems?.forEach(itemElem => {
            itemsContainer.appendChild(itemElem)
        });
        expElem.appendChild(itemsContainer)
        return expElem
    },

    // CV Row Item
    /**
     * sample item = {
            "body": "Coded something impressive.",
            "tags": ["python", "javascript"]
        },
     */
    createCvItem: (item) => {
        // <div class="cv-exp-item">
        //     <div class="cv-exp-item-body">Managed product release and launch of CPC push feature, which ended up generating over 30% of the total revenue of push ads service.</div>
        //     <div class="cv-exp-item-tags">
        //         <div class="cv-exp-item-tag">python</div>
        //         <div class="cv-exp-item-tag">django</div>
        //     </div>
        // </div>
        let tagClasses = item.tags.map(tag => `${TagService._prefix}${tag}`)
        let itemElem = DOMUtils.createDiv('cv-exp-item', ...tagClasses)
        
        itemElem.addEventListener(EVT_toggleTag, (event) => {
            if(itemElem.classList.contains('hidden')) { // FIXME: refactor.
                if (!item.tags.every(tag => TagService._removedTags.has(tag))){ 
                    event.target.classList.remove('hidden')    
                }
            } else if(item.tags.every(tag => TagService._removedTags.has(tag))) {
                event.target.classList.add('hidden')
            }
            event.target.closest('.cv-exp').dispatchEvent(new Event(EVT_toggleHideItem))
        })
        
        let body = DOMUtils.createDiv('cv-exp-item-body')
        body.innerText = item.body
        itemElem.appendChild(body)
        
        // let tagsContainer = DOMUtils.createDiv('cv-exp-item-tags')
        // item.tags?.forEach(tag => {
        //     let tagElem = DOMUtils.createDiv('cv-exp-item-tag')
        //     tagElem.innerText = tag
        //     tagsContainer.appendChild(tagElem)
        // });
        // itemElem.appendChild(tagsContainer)
        return itemElem
    },

    createTagElement: (tag, options = {}) => {
        // <div class="cv-skill">python</div>
        let tagElem = DOMUtils.createTextDiv(tag, 'cv-skill')
        if(options.first) {
            tagElem.classList.add('cv-skill-first')
        } else {
            tagElem.addEventListener('click', TagService.toggleSelect)
            tagElem.classList.add('clickable')
        }
        return tagElem
    }
}

var TagService = {
    _removedTags: new Set(),
    _prefix: 'tag--',

    cleanTag: (tag) => {
        return tag.replace(/\ |\_\./g, '-')
    },
    extractAndCleanTags: (cv) => {
        let tags = new Set([]) // Set<string>
        cv.sections.forEach(section => {
            section.experiences?.forEach(exp => {
                exp.items?.forEach(item => {
                    if(item.tags.length) {
                        let cleanTags = item.tags.map(TagService.cleanTag)
                        item.tags = cleanTags
                        item.tags.forEach(tag => tags.add(tag))
                    }
                })
            });
        });
        return {cv, tags};
    },

    /**
     * 
     * @param {Set<string>} tags 
     */
    renderTags: (tags) => {
        let tagsList = Array.from(tags)
        let firstTagElem = DomCV.createTagElement('Skills: ', { first: true })
        let tagElements = tagsList.map(DomCV.createTagElement)
        
        let tagsContainer = document.getElementById('cv-skills')
        tagsContainer.innerHTML = ''
        tagsContainer.appendChild(firstTagElem)
        tagElements.forEach(tagElem => {
            tagsContainer.appendChild(tagElem)
        });
    },
    toggleSelect: (event) => {
        let tagElem = event.target
        let tag = tagElem.innerHTML
        tagElem.classList.toggle('removed')

        if(TagService._removedTags.has(tag)) TagService._removedTags.delete(tag)
        else TagService._removedTags.add(tag)
        
        let tagClassName = TagService.cleanTag(TagService._prefix+tag)
        let itemsContainingTag = document.querySelectorAll(`.${tagClassName}`)
        itemsContainingTag?.forEach(item => {
            item.dispatchEvent(new Event(EVT_toggleTag))
        })
        
    }
}

function printResume(elem) {
    let contentsElem = document.getElementById(elem)//.innerHTML
    contentsElem = contentsElem.cloneNode(true);
    // insert tags here.
    // contentsElem.querySelectorAll('.cv-exp-item-body').forEach(cvItem => {
    //     cvItem.innerHTML = '&bull;&nbsp;&nbsp;' + cvItem.innerHTML
    // })
    let contents = contentsElem.innerHTML

    let frame1 = document.createElement('iframe')
    frame1.name = "frame1";
    frame1.style.cssText =  "position= absolute; top= -1000000px;"
    document.getElementsByTagName('body').item(0).appendChild(frame1);
    let frameDoc = frame1.contentWindow ? frame1.contentWindow : frame1.contentDocument.document ? frame1.contentDocument.document : frame1.contentDocument;
    frameDoc.document.open();
    //Create a new HTML document.
    const name = document.getElementsByClassName('cv-name')[0].innerHTML
    frameDoc.document.write(`<html><head><title>${name}'s Resume</title>`);
    frameDoc.document.write('</head><body>');
    //Append the external CSS file.
    frameDoc.document.write('<link href="style.css" rel="stylesheet" type="text/css" />');
    frameDoc.document.write('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.1/css/fontawesome.min.css" />');
    //Append the DIV contents.
    frameDoc.document.write(contents);
    frameDoc.document.write('</body></html>');
    frameDoc.document.close();

    setTimeout(() => {
        window.frames["frame1"].focus();
        window.frames["frame1"].print();
    }, 500)

    // Safari
    window.onafterprint = function(){
        frame1.remove();
    }
    if (window.matchMedia) {
        let mediaQueryCallback = function (mql) {
            if (!mql.matches && frame1) {
                frame1.remove();
            }
        };
        let mediaQueryList = window.frames[frame1.name].matchMedia('print');
        mediaQueryList.addEventListener('change', mediaQueryCallback);

        // the code below will trigger a cleanup in case a user hits Cancel button
        window.frames[frame1.name].focus();
        window.frames[frame1.name].onfocus = function () {
            return mediaQueryCallback(mediaQueryList);
        };
    }
    
}

function renderResume() {
    // let cv = JSON.parse(resume)
    let cv = resume
    
    let {cv: cleanCv, tags} = TagService.extractAndCleanTags(cv) // Set<string>
    TagService._tags = tags
    TagService.renderTags(tags)

    let cvName = document.getElementsByClassName('cv-name')[0]
    cvName.innerHTML = cleanCv.name

    let cvLinks = cleanCv.links.map(DomCV.createCVLink);
    let linkContainerElem = document.getElementById('cv-links')
    linkContainerElem.innerHTML = ''
    cvLinks.forEach(linkElem => {
        linkContainerElem.appendChild(linkElem)
    });

    let cvSectionElements = cleanCv.sections.map(DomCV.createCvSection);
    let sectionsElem = document.getElementById('cv-sections')
    sectionsElem.innerHTML = ''
    cvSectionElements.forEach(section => {
        sectionsElem.appendChild(section)
    });
    
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('change', validateForm)
    })
    // filterTags
    // renderSections
    // 
}

function validateForm(event) {
    let form = event.target
    console.log(form)
}