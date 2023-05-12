# Week 12 DOM Selectors: 
## I tried adding decimals into the form validation code like "0.0". I was also thinking that the form we wrote in the index.html was limiting us. I feel like using the number type might be too restrictive and it might be part of why it is not letting us enter decimals. I think we may need to use a different type that includes decimals but also restricts letters. I just do not know what type meets that criteria.

### This answered my suspicions. I didn't even think about parseInt, which has "integer" in the name, which means it does not include things like decimals. It is also good that we learned how to set limits with decimals too with the Number constructor.

#### I would probably choose querySelectorAll() since it shows all the buttons and we can individually edit them too. I think we would have to implement it inside render.js since that is where the edit and delete buttons are. I think we will have to edit the renderTable and renderEditDelBtn functions.