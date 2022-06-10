
# definitions

        footnoteText1 footnoteText2
               footerText3

- footnote1 and 2 are the 1st line on the bottom
    - footnote1 usually short text,
    - footnote2 a link to data source
    - mandatory
- footnoteText3 is the 2nd line
    - might be a lenghty textual explanation about some detail
    - optional

# usage example

- this is not a classic component,
- rather a suggestion on how to implement footer (as standard per convention)
- following code depends on bootstrap 5 and l10n component

use this in index.html:

	<link rel="stylesheet" href="components/footerLines/footerLines.css">

    <div class="d-flex justify-content-center" style="max-height:2%;">
        <div id="footnoteText1" translate style="display: inline-block;">footnoteText1</div>
        &nbsp;
        <a id="footnoteText2" target="_blank" rel="noopener" href="https://ec.europa.eu/eurostat/databrowser/bookmark/03a2bb70-40a8-4798-8682-d82d9c6701a0?lang=en" translate>
            footnoteText2</a>
    </div>
        
    <div class="d-flex justify-content-center" style="max-height:2%; text-align: center;">
        <a id="footnoteText3" translate>footnoteText3</a>
    </div>

and this in the en.json

    "footnoteText1": "Source: Eurostat - ",
    "footnoteText2": "access to dataset",
    "footnoteText3": "Note to users: Data for certain dimensions are not available as they are submitted by EU Member\nStates to Eurostat on a voluntary basis.",
