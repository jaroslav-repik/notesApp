describe('notes overview', function() {
    
  beforeEach(function() {
	browser.get('http://localhost:9000');
  }); 
  
  it('should display at least on note', function() {
    //add a note 
    var addLink =  element(by.css('[ui-sref=".add"]'));
	addLink.click();
	element(by.model('note.title')).sendKeys('test note test');
	var submitButton =  element(by.id('addNoteSubmitButton'));
	submitButton.click();
	
    //get notes
    var listOfNotes = element.all(by.repeater('note in notes'));
	expect(listOfNotes.count()).toBeGreaterThan(0);
  });
  
});