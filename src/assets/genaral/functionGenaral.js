// get element parent
function getParent(element, parent) {
    while(element.parentElement) {
        if(element.parentElement.matches(parent)) {
            return element.parentElement
        }
        element = element.parentElement
    }
}

// hover uti - để hiện detail
function hoverUti(tagList) {
    return function() {
        const notes = tagList.querySelectorAll('span.noted')
        notes.forEach(function(note) {
            const elementHover = note.parentElement
            elementHover.addEventListener('mouseenter', function() {
                const setTimeAppear = setTimeout(() => {
                    elementHover.classList.add('noting')
                    console.log(1)
                }, 500);
                elementHover.addEventListener('mouseleave',function() {
                    clearTimeout(setTimeAppear)
                })
                elementHover.addEventListener('click', function() {
                    clearTimeout(setTimeAppear)
                })
            })
            elementHover.addEventListener('mouseleave', function() {
                elementHover.classList.remove('noting')
            })
            elementHover.addEventListener('click', function() {
                elementHover.classList.remove('noting')
            })
        })
    }
}

// hover element - hover các phần tử bên trong 1 mảng
const hoverElement = (element, buttonMore) => {
    const hoverElementItem = () => {
        element.style.transition = 'none'
        element.style.backgroundColor = 'var(--hover-primary)'
        if(buttonMore) buttonMore.style.display = 'flex'
    }
    const hoverOutElementItem = () => {
        element.style.backgroundColor = 'transparent'
        element.style.transition = 'all 0.15s ease-in-out'
        if(buttonMore) buttonMore.style.display = 'none'
    }
    const hoverButtonMore = () => {
        buttonMore.style.backgroundColor = '#626262'
        element.style.backgroundColor = 'transparent'
    }
    const hoverOutButtonMore = () => {
        buttonMore.style.backgroundColor = '#404040'
        element.style.backgroundColor = 'rgba(225, 225, 225, 0.2)'
    }
    return {hoverElementItem, hoverOutElementItem, hoverButtonMore, hoverOutButtonMore}
}

export { getParent, hoverUti, hoverElement }