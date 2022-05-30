
# definitions

        footnoteText
    footerText footerLink

- footnote is the 1st line on the bottom
    - might be a lenghty textual explanation about some detail
    - optional
- footer is the 2nd line
    - usually short text and link to data source
    - mandatory

# usage example

- this is not a classic component,
- rather a suggestion on how to implement footer (as standard per convention)
- following code depends on bootstrap and l10n component

use this in index.html:

	<link rel="stylesheet" href="components/footerLines/footerLines.css">

    <div class="d-flex justify-content-center" style="max-height:2%;">
        <a id="footnote" translate>footnoteText</a>
    </div>

    <div class="d-flex justify-content-center" style="max-height:2%;">
        <div id="footerText" translate style="display: inline-block;">footerText</div>
        &nbsp;
        <a id="footerLink" target="_blank" rel="noopener" href="https://ec.europa.eu/eurostat/databrowser" translate>
            footerLinkText</a>
    </div>

and this in the en.json

    "footnoteText": "Some footnote text, e.g. explaining some detail",
    "footerText": "Source: Eurostat - ",
    "footerLinkText": "access to dataset"
