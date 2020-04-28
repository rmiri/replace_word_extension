//The comparison is sensible to capital letters, so I'm giving it an array with options to compare.
var words = ["Coronavirus","coronavirus","corona"],
    replace = 'Flowers',
    queue = [document.body],
    curr
;


while (curr = queue.pop()) {
    for(var j = 0; j < words.length; j++) {
        if (!curr.textContent.match(words[j])) continue;
        for (var i = 0; i < curr.childNodes.length; ++i) {
            switch (curr.childNodes[i].nodeType) {
                case Node.TEXT_NODE : // 3
                   
                    if (curr.childNodes[i].textContent.match(words[j])) {
                    
                        var str = curr.childNodes[i].textContent;

                     curr.childNodes[i].textContent = str.replace(words[j], replace)
                  
                    }
                    break;
                case Node.ELEMENT_NODE : // 1
                    queue.push(curr.childNodes[i]);
                    break;

            }}
        }
    }


