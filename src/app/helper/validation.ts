// FormChek.js
//
// SUMMARY
//
// This is a set of JavaScript functions for validating input on 
// an HTML form.  Functions are provided to validate:
//
//      - U.S. and international phone/fax numbers
//      - U.S. ZIP codes (5 or 9 digit postal codes)
//      - U.S. Postal Codes (2 letter abbreviations for names of states)
//      - U.S. Social Security Numbers (abbreviated as SSNs)
//      - email addresses
//	- dates (entry of year, month, and day and validity of combined date)
//	- credit card numbers
//
// Supporting utility functions validate that:
//
//      - characters are Letter, Digit, or LetterOrDigit
//      - strings are a Signed, Positive, Negative, Nonpositive, or
//        Nonnegative integer
//      - strings are a Float or a SignedFloat
//      - strings are Alphabetic, Alphanumeric, or Whitespace
//      - strings contain an integer within a specified range
//
// Functions are also provided to interactively check the
// above kinds of data and prompt the user if they have
// been entered incorrectly.
//
// Other utility functions are provided to:
//
// 	- remove from a string characters which are/are not 
//	  in a "bag" of selected characters	
// 	- reformat a string, adding delimiter characters
//	- strip whitespace/leading whitespace from a string
//      - reformat U.S. phone numbers, ZIP codes, and Social
//        Security numbers
//
//
// Many of the below functions take an optional parameter eok (for "emptyOK")
// which determines whether the empty string will return true or false.
// Default behavior is controlled by global variable defaultEmptyOK.
//
// BASIC DATA VALIDATION FUNCTIONS:
//
// isWhitespace (s)                    Check whether string s is empty or whitespace.
// isLetter (c)                        Check whether character c is an English letter 
// isDigit (c)                         Check whether character c is a digit 
// isLetterOrDigit (c)                 Check whether character c is a letter or digit.
// isInteger (s [,eok])                True if all characters in string s are numbers.
// isSignedInteger (s [,eok])          True if all characters in string s are numbers; leading + or - allowed.
// isPositiveInteger (s [,eok])        True if string s is an integer > 0.
// isNonnegativeInteger (s [,eok])     True if string s is an integer >= 0.
// isNegativeInteger (s [,eok])        True if s is an integer < 0.
// isNonpositiveInteger (s [,eok])     True if s is an integer <= 0.
// isFloat (s [,eok])                  True if string s is an unsigned floating point (real) number. (Integers also OK.)
// isSignedFloat (s [,eok])            True if string s is a floating point number; leading + or - allowed. (Integers also OK.)
// isAlphabetic (s [,eok])             True if string s is English letters 
// isAlphanumeric (s [,eok])           True if string s is English letters and numbers only.
// 
// isSSN (s [,eok])                    True if string s is a valid U.S. Social Security Number.
// isUSPhoneNumber (s [,eok])          True if string s is a valid U.S. Phone Number. 
// isInternationalPhoneNumber (s [,eok]) True if string s is a valid international phone number.
// isZIPCode (s [,eok])                True if string s is a valid U.S. ZIP code.
// isStateCode (s [,eok])              True if string s is a valid U.S. Postal Code
// isEmail (s [,eok])                  True if string s is a valid email address.
// isYear (s [,eok])                   True if string s is a valid Year number.
// isIntegerInRange (s, a, b [,eok])   True if string s is an integer between a and b, inclusive.
// isMonth (s [,eok])                  True if string s is a valid month between 1 and 12.
// isDay (s [,eok])                    True if string s is a valid day between 1 and 31.
// daysInFebruary (year)               Returns number of days in February of that year.
// isDate (year, month, day)           True if string arguments form a valid date.


// FUNCTIONS TO REFORMAT DATA:
//
// stripCharsInBag (s, bag)            Removes all characters in string bag from string s.
// stripCharsNotInBag (s, bag)         Removes all characters NOT in string bag from string s.
// stripWhitespace (s)                 Removes all whitespace characters from s.
// stripInitialWhitespace (s)          Removes initial (leading) whitespace characters from s.
// reformat (TARGETSTRING, STRING,     Function for inserting formatting characters or
//   INTEGER, STRING, INTEGER ... )       delimiters into TARGETSTRING.                                       
// reformatZIPCode (ZIPString)         If 9 digits, inserts separator hyphen.
// reformatSSN (SSN)                   Reformats as 123-45-6789.
// reformatUSPhone (USPhone)           Reformats as (123) 456-789.

// Other stub functions are retained for backward compatibility with LivePayment code.
// See comments below for details.
//
// Performance hint: when you deploy this file on your website, strip out the
// comment lines from the source code as well as any of the functions which
// you don't need.  This will give you a smaller .js file and achieve faster
// downloads.
//
// 18 Feb 97 created Eric Krock
// Original JavaScript 1.0-only version (works on Nav2.x and higher)
// available at http://developer.netscape.com/library/examples/javascript/formval/overview.html
// 
// 4 Nov 97 rewritten to demonstrate use of JavaScript 1.2 regular expressions.
// (code is simpler and shorter but works on Nav4.x and higher only)
//
// (c) 1997 Netscape Communications Corporation




// REGULAR EXPRESSION DECLARATIONS
// Notes which apply to all the regexps below:
// (1) We want to only match strings exactly. In other words,
//     we only want to return true if the string being tested
//     matches the regular expression with no leading or trailing
//     unmatched characters. So, we begin each regexp with
//     the special character ^ (which matches beginning of input)
//     and end each regexp with the special character $ (which
//     matches end of input).
// (2) In the below comments we use these abbreviations:
//     BOI = Beginning Of Input
//     EOI = End Of Input
// (3) For explanations of the regexp special characters such as
//     ^ $ \s + [] \d * ! ? \ .
//     see http://developer.netscape.com/library/documentation/communicator/jsguide/regexp.htm


// BOI, followed by one or more whitespace characters, followed by EOI.
let reWhitespace = /^\s+$/


// BOI, followed by one lower or uppercase English letter, followed by EOI.
let reLetter = /^[a-zA-Z]$/


// BOI, followed by one or more lower or uppercase English letters, 
// followed by EOI.
let reAlphabetic = /^[a-zA-Z]+$/


// BOI, followed by one or more lower or uppercase English letters
// or digits, followed by EOI.
let reAlphanumeric = /^[a-zA-Z0-9]+$/


// BOI, followed by one digit, followed by EOI.
let reDigit = /^\d/


// BOI, followed by one lower or uppercase English letter
// or digit, followed by EOI.
let reLetterOrDigit = /^([a-zA-Z]|\d)$/


// BOI, followed by one or more digits, followed by EOI.
let reInteger = /^\d+$/


// BOI, followed by an optional + or -, followed by one or more digits, 
// followed by EOI.
let reSignedInteger = /^(\+|\-)?\d+$/


// BOI, followed by one of these two patterns:
// (a) one or more digits, followed by ., followed by zero or more digits
// (b) zero or more digits, followed by ., followed by one or more digits
// ... followed by EOI.
let reFloat = /^((\d+(\.\d*)?)|((\d*\.)?\d+))$/


// BOI, followed by an optional + or -, followed by one of these two patterns:
// (a) one or more digits, followed by ., followed by zero or more digits
// (b) zero or more digits, followed by ., followed by one or more digits
// ... followed by EOI.
let reSignedFloat = /^(((\+|\-)?\d+(\.\d*)?)|((\+|\-)?(\d*\.)?\d+))$/

// BOI, followed by one or more characters, followed by @,
// followed by one or more characters, followed by ., 
// followed by one or more characters, followed by EOI.
let reEmail = /^.+\@.+\..+$/




// VARIABLE DECLARATIONS

let digits = "0123456789";

let lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"

let uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

// whitespace characters as defined by this sample code
let whitespace = " \t\n\r";


// non-digit characters which are allowed in phone numbers
let phoneNumberDelimiters = "()- ";


// characters which are allowed in US phone numbers
let validUSPhoneChars = digits + phoneNumberDelimiters;


// characters which are allowed in international phone numbers
// (a leading + is OK)
let validWorldPhoneChars = digits + phoneNumberDelimiters + "+";


// non-digit characters which are allowed in 
// Social Security Numbers
let SSNDelimiters = "- ";



// characters which are allowed in Social Security Numbers
let validSSNChars = digits + SSNDelimiters;



// U.S. Social Security Numbers have 9 digits.
// They are formatted as 123-45-6789.
let digitsInSocialSecurityNumber = 9;



// U.S. phone numbers have 10 digits.
// They are formatted as 123 456 7890 or (123) 456-7890.
let digitsInUSPhoneNumber = 10;



// non-digit characters which are allowed in ZIP Codes
let ZIPCodeDelimiters = "-";



// our preferred delimiter for reformatting ZIP Codes
let ZIPCodeDelimeter = "-"


// characters which are allowed in Social Security Numbers
let validZIPCodeChars = digits + ZIPCodeDelimiters



// U.S. ZIP codes have 5 or 9 digits.
// They are formatted as 12345 or 12345-6789.
let digitsInZIPCode1 = 5
let digitsInZIPCode2 = 9


// non-digit characters which are allowed in credit card numbers
let creditCardDelimiters = " "


// CONSTANT STRING DECLARATIONS
// (grouped for ease of translation and localization)

// m is an abbreviation for "missing"

let mPrefix = "You did not enter a value into the "
let mSuffix = " field. This is a required field. Please enter it now."

// s is an abbreviation for "string"

let sUSLastName = "Last Name"
let sUSFirstName = "First Name"
let sWorldLastName = "Family Name"
let sWorldFirstName = "Given Name"
let sTitle = "Title"
let sCompanyName = "Company Name"
let sUSAddress = "Street Address"
let sWorldAddress = "Address"
let sCity = "City"
let sStateCode = "State Code"
let sWorldState = "State, Province, or Prefecture"
let sCountry = "Country"
let sZIPCode = "ZIP Code"
let sWorldPostalCode = "Postal Code"
let sPhone = "Phone Number"
let sFax = "Fax Number"
let sDateOfBirth = "Date of Birth"
let sExpirationDate = "Expiration Date"
let sEmail = "Email"
let sSSN = "Social Security Number"
let sCreditCardNumber = "Credit Card Number"
let sOtherInfo = "Other Information"




// i is an abbreviation for "invalid"

let iStateCode = "This field must be a valid two character U.S. state abbreviation (like CA for California). Please reenter it now."
let iZIPCode = "This field must be a 5 or 9 digit U.S. ZIP Code (like 94043). Please reenter it now."
let iUSPhone = "This field must be a 10 digit U.S. phone number (like 415 555 1212). Please reenter it now."
let iWorldPhone = "This field must be a valid international phone number. Please reenter it now."
let iSSN = "This field must be a 9 digit U.S. social security number (like 123 45 6789). Please reenter it now."
let iEmail = "This field must be a valid email address (like foo@bar.com). Please reenter it now."
let iCreditCardPrefix = "This is not a valid "
let iCreditCardSuffix = " credit card number. (Click the link on this form to see a list of sample numbers.) Please reenter it now."
let iDay = "This field must be a day number between 1 and 31.  Please reenter it now."
let iMonth = "This field must be a month number between 1 and 12.  Please reenter it now."
let iYear = "This field must be a 2 or 4 digit year number.  Please reenter it now."
let iDatePrefix = "The Day, Month, and Year for "
let iDateSuffix = " do not form a valid date.  Please reenter them now."



// p is an abbreviation for "prompt"

let pEntryPrompt = "Please enter a "
let pStateCode = "2 character code (like CA)."
let pZIPCode = "5 or 9 digit U.S. ZIP Code (like 94043)."
let pUSPhone = "10 digit U.S. phone number (like 415 555 1212)."
let pWorldPhone = "international phone number."
let pSSN = "9 digit U.S. social security number (like 123 45 6789)."
let pEmail = "valid email address (like foo@bar.com)."
let pCreditCard = "valid credit card number."
let pDay = "day number between 1 and 31."
let pMonth = "month number between 1 and 12."
let pYear = "2 or 4 digit year number."


// Global variable defaultEmptyOK defines default return value 
// for many functions when they are passed the empty string. 
// By default, they will return defaultEmptyOK.
//
// defaultEmptyOK is false, which means that by default, 
// these functions will do "strict" validation.  Function
// isInteger, for example, will only return true if it is
// passed a string containing an integer; if it is passed
// the empty string, it will return false.
//
// You can change this default behavior globally (for all 
// functions which use defaultEmptyOK) by changing the value
// of defaultEmptyOK.
//
// Most of these functions have an optional argument emptyOK
// which allows you to override the default behavior for 
// the duration of a function call.
//
// This functionality is useful because it is possible to
// say "if the user puts anything in this field, it must
// be an integer (or a phone number, or a string, etc.), 
// but it's OK to leave the field empty too."
// This is the case for fields which are optional but which
// must have a certain kind of content if filled in.

let defaultEmptyOK = false




// Attempting to make this library run on Navigator 2.0,
// so I'm supplying this array creation routine as per
// JavaScript 1.0 documentation.  If you're using 
// Navigator 3.0 or later, you don't need to do this;
// you can use the Array constructor instead.

function makeArray(n: number) {
//*** BUG: If I put this line in, I get two error messages:
//(1) Window.length can't be set by assignment
//(2) daysInMonth has no property indexed by 4
//If I leave it out, the code works fine.
//   this.length = n;
   let v = [];
   for (let i = 1; i <= n; i++) {
      v[i] = 0
   } 
   return v;
}



let daysInMonth = makeArray(12);
daysInMonth[1] = 31;
daysInMonth[2] = 29;   // must programmatically check this
daysInMonth[3] = 31;
daysInMonth[4] = 30;
daysInMonth[5] = 31;
daysInMonth[6] = 30;
daysInMonth[7] = 31;
daysInMonth[8] = 31;
daysInMonth[9] = 30;
daysInMonth[10] = 31;
daysInMonth[11] = 30;
daysInMonth[12] = 31;




// Valid U.S. Postal Codes for states, territories, armed forces, etc.
// See http://www.usps.gov/ncsc/lookups/abbr_state.txt.

let USStateCodeDelimiter = "|";
let USStateCodes = "AL|AK|AS|AZ|AR|CA|CO|CT|DE|DC|FM|FL|GA|GU|HI|ID|IL|IN|IA|KS|KY|LA|ME|MH|MD|MA|MI|MN|MS|MO|MT|NE|NV|NH|NJ|NM|NY|NC|ND|MP|OH|OK|OR|PW|PA|PR|RI|SC|SD|TN|TX|UT|VT|VI|VA|WA|WV|WI|WY|AE|AA|AE|AE|AP"




// Check whether string s is empty.

export function isEmpty(s: string)
{   return ((s == null) || (s.length == 0))
}



// Returns true if string s is empty or 
// whitespace characters only.

export function isWhitespace (s: string)

{   // Is s empty?
    return (isEmpty(s) || reWhitespace.test(s));
}



// Removes all characters which appear in regexp bag from string s.
// NOTES:
// 1) bag must be a regexp which matches single characters in isolation,
//    i.e. A or B or C or D or 1 or 2 ...
//    e.g. /\d/g  or /[a-zA-Z]/g
// 2) make sure to append the 'g' modifier (for global search & replace)
//    at the end of the regexp
//    e.g. /\d/g  or /[a-zA-Z]/g

export function stripCharsInRE (s: string, bag: string)

{       return s.replace(bag, "")
}



// Removes all characters which appear in string bag from string s.

export function stripCharsInBag (s: string, bag: string)

{   let i;
    let returnString = "";

    // Search through string's characters one by one.
    // If character is not in bag, append to returnString.

    for (i = 0; i < s.length; i++)
    {   
        // Check that current character isn't whitespace.
        let c = s.charAt(i);
        if (bag.indexOf(c) == -1) returnString += c;
    }

    return returnString;
}



// Removes all characters which do NOT appear in string bag 
// from string s.

export function stripCharsNotInBag (s: string, bag: string)

{   let i;
    let returnString = "";

    // Search through string's characters one by one.
    // If character is in bag, append to returnString.

    for (i = 0; i < s.length; i++)
    {   
        // Check that current character isn't whitespace.
        let c = s.charAt(i);
        if (bag.indexOf(c) != -1) returnString += c;
    }

    return returnString;
}



// Removes all whitespace characters from s.
// Global variable whitespace (see above)
// defines which characters are considered whitespace.

export function stripWhitespace (s: string)

{   return stripCharsInBag (s, whitespace)
}




// WORKAROUND FUNCTION FOR NAVIGATOR 2.0.2 COMPATIBILITY.
//
// The below export function *should* be unnecessary.  In general,
// avoid using it.  Use the standard method indexOf instead.
//
// However, because of an apparent bug in indexOf on 
// Navigator 2.0.2, the below loop does not work as the
// body of stripInitialWhitespace:
//
// while ((i < s.length) && (whitespace.indexOf(s.charAt(i)) != -1))
//   i++;
//
// ... so we provide this workaround export function charInString
// instead.
//
// charInString (CHARACTER c, STRING s)
//
// Returns true if single character c (actually a string)
// is contained within string s.

export function charInString (c: string, s: string)
{   for (let i = 0; i < s.length; i++)
    {   if (s.charAt(i) == c) return true;
    }
    return false
}



// Removes initial (leading) whitespace characters from s.
// Global variable whitespace (see above)
// defines which characters are considered whitespace.

export function stripInitialWhitespace (s: string)

{   let i = 0;

    while ((i < s.length) && charInString (s.charAt(i), whitespace))
       i++;
    
    return s.substring (i, s.length);
}







// Returns true if character c is an English letter 
// (A .. Z, a..z).
//
// NOTE: Need i18n version to support European characters.
// This could be tricky due to different character
// sets and orderings for various languages and platforms.

export function isLetter (c: string)
{   return reLetter.test(c)
}



// Returns true if character c is a digit 
// (0 .. 9).

export function isDigit (c: string)
{   return reDigit.test(c)
}



// Returns true if character c is a letter or digit.

export function isLetterOrDigit (c: string)
{   return reLetterOrDigit.test(c)
}



// isInteger (STRING s [, BOOLEAN emptyOK])
// 
// Returns true if all characters in string s are numbers.
//
// Accepts non-signed integers only. Does not accept floating 
// point, exponential notation, etc.
//
// We don't use parseInt because that would accept a string
// with trailing non-numeric characters.
//
// By default, returns defaultEmptyOK if s is empty.
// There is an optional second argument called emptyOK.
// emptyOK is used to override for a single export function call
//      the default behavior which is specified globally by
//      defaultEmptyOK.
// If emptyOK is false (or any value other than true), 
//      the export function will return false if s is empty.
// If emptyOK is true, the export function will return true if s is empty.
//
// EXAMPLE FUNCTION CALL:     RESULT:
// isInteger ("5")            true 
// isInteger ("")             defaultEmptyOK
// isInteger ("-5")           false
// isInteger ("", true)       true
// isInteger ("", false)      false
// isInteger ("5", false)     true

export function isInteger (s: string, eok? : any )
{   

    if (isEmpty(s)) 
       if (isInteger.arguments.length == 1) return defaultEmptyOK;
       else return (isInteger.arguments[1] == true);

    return reInteger.test(s)
}







// isSignedInteger (STRING s [, BOOLEAN emptyOK])
// 
// Returns true if all characters are numbers; 
// first character is allowed to be + or - as well.
//
// Does not accept floating point, exponential notation, etc.
//
// We don't use parseInt because that would accept a string
// with trailing non-numeric characters.
//
// For explanation of optional argument emptyOK,
// see comments of export function isInteger.
//
// EXAMPLE FUNCTION CALL:          RESULT:
// isSignedInteger ("5")           true 
// isSignedInteger ("")            defaultEmptyOK
// isSignedInteger ("-5")          true
// isSignedInteger ("+5")          true
// isSignedInteger ("", false)     false
// isSignedInteger ("", true)      true

export function isSignedInteger (s : string, eok? : any)

{   if (isEmpty(s)) 
       if (isSignedInteger.arguments.length == 1) return defaultEmptyOK;
       else return (isSignedInteger.arguments[1] == true);

    
    else {
       return reSignedInteger.test(s)
    }
}




// isPositiveInteger (STRING s [, BOOLEAN emptyOK])
// 
// Returns true if string s is an integer > 0.
//
// For explanation of optional argument emptyOK,
// see comments of export function isInteger.

export function isPositiveInteger (s:string, eok?: any)
{   let secondArg = defaultEmptyOK;

    if (isPositiveInteger.arguments.length > 1)
        secondArg = isPositiveInteger.arguments[1];

    // The next line is a bit byzantine.  What it means is:
    // a) s must be a signed integer, AND
    // b) one of the following must be true:
    //    i)  s is empty and we are supposed to return true for
    //        empty strings
    //    ii) this is a positive, not negative, number

    return (isSignedInteger(s, secondArg)
         && ( (isEmpty(s) && secondArg)  || (parseInt (s) > 0) ) );
}






// isNonnegativeInteger (STRING s [, BOOLEAN emptyOK])
// 
// Returns true if string s is an integer >= 0.
//
// For explanation of optional argument emptyOK,
// see comments of export function isInteger.

export function isNonnegativeInteger (s:string, eok?: any)
{   let secondArg = defaultEmptyOK;

    if (isNonnegativeInteger.arguments.length > 1)
        secondArg = isNonnegativeInteger.arguments[1];

    // The next line is a bit byzantine.  What it means is:
    // a) s must be a signed integer, AND
    // b) one of the following must be true:
    //    i)  s is empty and we are supposed to return true for
    //        empty strings
    //    ii) this is a number >= 0

    return (isSignedInteger(s, secondArg)
         && ( (isEmpty(s) && secondArg)  || (parseInt (s) >= 0) ) );
}






// isNegativeInteger (STRING s [, BOOLEAN emptyOK])
// 
// Returns true if string s is an integer < 0.
//
// For explanation of optional argument emptyOK,
// see comments of export function isInteger.

export function isNegativeInteger (s:string, eok?: any)
{   let secondArg = defaultEmptyOK;

    if (isNegativeInteger.arguments.length > 1)
        secondArg = isNegativeInteger.arguments[1];

    // The next line is a bit byzantine.  What it means is:
    // a) s must be a signed integer, AND
    // b) one of the following must be true:
    //    i)  s is empty and we are supposed to return true for
    //        empty strings
    //    ii) this is a negative, not positive, number

    return (isSignedInteger(s, secondArg)
         && ( (isEmpty(s) && secondArg)  || (parseInt (s) < 0) ) );
}






// isNonpositiveInteger (STRING s [, BOOLEAN emptyOK])
// 
// Returns true if string s is an integer <= 0.
//
// For explanation of optional argument emptyOK,
// see comments of export function isInteger.

export function isNonpositiveInteger (s:string, eok?: any)
{   let secondArg = defaultEmptyOK;

    if (isNonpositiveInteger.arguments.length > 1)
        secondArg = isNonpositiveInteger.arguments[1];

    // The next line is a bit byzantine.  What it means is:
    // a) s must be a signed integer, AND
    // b) one of the following must be true:
    //    i)  s is empty and we are supposed to return true for
    //        empty strings
    //    ii) this is a number <= 0

    return (isSignedInteger(s, secondArg)
         && ( (isEmpty(s) && secondArg)  || (parseInt (s) <= 0) ) );
}





// isFloat (STRING s [, BOOLEAN emptyOK])
// 
// True if string s is an unsigned floating point (real) number. 
//
// Also returns true for unsigned integers. If you wish
// to distinguish between integers and floating point numbers,
// first call isInteger, then call isFloat.
//
// Does not accept exponential notation.
//
// For explanation of optional argument emptyOK,
// see comments of export function isInteger.

export function isFloat (s:string, eok?: any)

{   if (isEmpty(s)) 
       if (isFloat.arguments.length == 1) return defaultEmptyOK;
       else return (isFloat.arguments[1] == true);

    return reFloat.test(s)
}







// isSignedFloat (STRING s [, BOOLEAN emptyOK])
// 
// True if string s is a signed or unsigned floating point 
// (real) number. First character is allowed to be + or -.
//
// Also returns true for unsigned integers. If you wish
// to distinguish between integers and floating point numbers,
// first call isSignedInteger, then call isSignedFloat.
//
// Does not accept exponential notation.
//
// For explanation of optional argument emptyOK,
// see comments of export function isInteger.

export function isSignedFloat (s:string, eok?: any)

{   if (isEmpty(s)) 
       if (isSignedFloat.arguments.length == 1) return defaultEmptyOK;
       else return (isSignedFloat.arguments[1] == true);

    else {
       return reSignedFloat.test(s)
    }
}




// isAlphabetic (STRING s [, BOOLEAN emptyOK])
// 
// Returns true if string s is English letters 
// (A .. Z, a..z) only.
//
// For explanation of optional argument emptyOK,
// see comments of export function isInteger.
//
// NOTE: Need i18n version to support European characters.
// This could be tricky due to different character
// sets and orderings for various languages and platforms.

export function isAlphabetic (s:string, eok?: any)

{   let i;

    if (isEmpty(s)) 
       if (isAlphabetic.arguments.length == 1) return defaultEmptyOK;
       else return (isAlphabetic.arguments[1] == true);

    else {
       return reAlphabetic.test(s)
    }
}




// isAlphanumeric (STRING s [, BOOLEAN emptyOK])
// 
// Returns true if string s is English letters 
// (A .. Z, a..z) and numbers only.
//
// For explanation of optional argument emptyOK,
// see comments of export function isInteger.
//
// NOTE: Need i18n version to support European characters.
// This could be tricky due to different character
// sets and orderings for various languages and platforms.

export function isAlphanumeric (s:string, eok?: any)

{   let i;

    if (isEmpty(s)) 
       if (isAlphanumeric.arguments.length == 1) return defaultEmptyOK;
       else return (isAlphanumeric.arguments[1] == true);

    else {
       return reAlphanumeric.test(s)
    }
}




// reformat (TARGETSTRING, STRING, INTEGER, STRING, INTEGER ... )       
//
// Handy export function for arbitrarily inserting formatting characters
// or delimiters of various kinds within TARGETSTRING.
//
// reformat takes one named argument, a string s, and any number
// of other arguments.  The other arguments must be integers or
// strings.  These other arguments specify how string s is to be
// reformatted and how and where other strings are to be inserted
// into it.
//
// reformat processes the other arguments in order one by one.
// * If the argument is an integer, reformat appends that number 
//   of sequential characters from s to the resultString.
// * If the argument is a string, reformat appends the string
//   to the resultString.
//
// NOTE: The first argument after TARGETSTRING must be a string.
// (It can be empty.)  The second argument must be an integer.
// Thereafter, integers and strings must alternate.  This is to
// provide backward compatibility to Navigator 2.0.2 JavaScript
// by avoiding use of the typeof operator.
//
// It is the caller's responsibility to make sure that we do not
// try to copy more characters from s than s.length.
//
// EXAMPLES:
//
// * To reformat a 10-digit U.S. phone number from "1234567890"
//   to "(123) 456-7890" make this export function call:
//   reformat("1234567890", "(", 3, ") ", 3, "-", 4)
//
// * To reformat a 9-digit U.S. Social Security number from
//   "123456789" to "123-45-6789" make this export function call:
//   reformat("123456789", "", 3, "-", 2, "-", 4)
//
// HINT:
//
// If you have a string which is already delimited in one way
// (example: a phone number delimited with spaces as "123 456 7890")
// and you want to delimit it in another way using export function reformat,
// call export function stripCharsNotInBag to remove the unwanted 
// characters, THEN call export function reformat to delimit as desired.
//
// EXAMPLE:
//
// reformat (stripCharsNotInBag ("123 456 7890", digits),
//           "(", 3, ") ", 3, "-", 4)

export function reformat (s: string, ...args:any[])

{   let arg;
    let sPos = 0;
    let resultString = "";

    for (let i = 1; i < reformat.arguments.length; i++) {
       arg = reformat.arguments[i];
       if (i % 2 == 1) resultString += arg;
       else {
           resultString += s.substring(sPos, sPos + arg);
           sPos += arg;
       }
    }
    return resultString;
}




// isSSN (STRING s [, BOOLEAN emptyOK])
// 
// isSSN returns true if string s is a valid U.S. Social
// Security Number.  Must be 9 digits.
//
// NOTE: Strip out any delimiters (spaces, hyphens, etc.)
// from string s before calling this export function.
//
// For explanation of optional argument emptyOK,
// see comments of export function isInteger.

export function isSSN (s:string, eok?: any)
{   if (isEmpty(s)) 
       if (isSSN.arguments.length == 1) return defaultEmptyOK;
       else return (isSSN.arguments[1] == true);
    return (isInteger(s) && s.length == digitsInSocialSecurityNumber)
}




// isUSPhoneNumber (STRING s [, BOOLEAN emptyOK])
// 
// isUSPhoneNumber returns true if string s is a valid U.S. Phone
// Number.  Must be 10 digits.
//
// NOTE: Strip out any delimiters (spaces, hyphens, parentheses, etc.)
// from string s before calling this export function.
//
// For explanation of optional argument emptyOK,
// see comments of export function isInteger.

export function isUSPhoneNumber (s:string, eok?: any)
{   if (isEmpty(s)) 
       if (isUSPhoneNumber.arguments.length == 1) return defaultEmptyOK;
       else return (isUSPhoneNumber.arguments[1] == true);
    return (isInteger(s) && s.length == digitsInUSPhoneNumber)
}




// isInternationalPhoneNumber (STRING s [, BOOLEAN emptyOK])
// 
// isInternationalPhoneNumber returns true if string s is a valid 
// international phone number.  Must be digits only; any length OK.
// May be prefixed by + character.
//
// NOTE: A phone number of all zeros would not be accepted.
// I don't think that is a valid phone number anyway.
//
// NOTE: Strip out any delimiters (spaces, hyphens, parentheses, etc.)
// from string s before calling this export function.  You may leave in 
// leading + character if you wish.
//
// For explanation of optional argument emptyOK,
// see comments of export function isInteger.

export function isInternationalPhoneNumber (s:string, eok?: any)
{   if (isEmpty(s)) 
       if (isInternationalPhoneNumber.arguments.length == 1) return defaultEmptyOK;
       else return (isInternationalPhoneNumber.arguments[1] == true);
    return (isPositiveInteger(s))
}




// isZIPCode (STRING s [, BOOLEAN emptyOK])
// 
// isZIPCode returns true if string s is a valid 
// U.S. ZIP code.  Must be 5 or 9 digits only.
//
// NOTE: Strip out any delimiters (spaces, hyphens, etc.)
// from string s before calling this export function.  
//
// For explanation of optional argument emptyOK,
// see comments of export function isInteger.

export function isZIPCode (s:string , eok?: any)
{  if (isEmpty(s)) 
       if (isZIPCode.arguments.length == 1) return defaultEmptyOK;
       else return (isZIPCode.arguments[1] == true);
   return (isInteger(s) && 
            ((s.length == digitsInZIPCode1) ||
             (s.length == digitsInZIPCode2)))
}





// isStateCode (STRING s [, BOOLEAN emptyOK])
// 
// Return true if s is a valid U.S. Postal Code 
// (abbreviation for state).
//
// For explanation of optional argument emptyOK,
// see comments of export function isInteger.

export function isStateCode(s:string , eok?: any)
{   if (isEmpty(s)) 
       if (isStateCode.arguments.length == 1) return defaultEmptyOK;
       else return (isStateCode.arguments[1] == true);
    return ( (USStateCodes.indexOf(s) != -1) &&
             (s.indexOf(USStateCodeDelimiter) == -1) )
}




// isEmail (STRING s [, BOOLEAN emptyOK])
// 
// Email address must be of form a@b.c -- in other words:
// * there must be at least one character before the @
// * there must be at least one character before and after the .
// * the characters @ and . are both required
//
// For explanation of optional argument emptyOK,
// see comments of export function isInteger.

export function isEmail (s:string , eok?: any)

{   if (isEmpty(s)) 
       if (isEmail.arguments.length == 1) return defaultEmptyOK;
       else return (isEmail.arguments[1] == true);
    
    else {
       return reEmail.test(s)
    }
}



// isYear (STRING s [, BOOLEAN emptyOK])
// 
// isYear returns true if string s is a valid 
// Year number.  Must be 2 or 4 digits only.
// 
// For Year 2000 compliance, you are advised
// to use 4-digit year numbers everywhere.
//
// And yes, this export function is not Year 10000 compliant, but 
// because I am giving you 8003 years of advance notice,
// I don't feel very guilty about this ...
//
// For B.C. compliance, write your own export function. ;->
//
// For explanation of optional argument emptyOK,
// see comments of export function isInteger.

export function isYear (s:string , eok?: any)
{   if (isEmpty(s)) 
       if (isYear.arguments.length == 1) return defaultEmptyOK;
       else return (isYear.arguments[1] == true);
    if (!isNonnegativeInteger(s)) return false;
    return ((s.length == 2) || (s.length == 4));
}



// isIntegerInRange (STRING s, INTEGER a, INTEGER b [, BOOLEAN emptyOK])
// 
// isIntegerInRange returns true if string s is an integer 
// within the range of integer arguments a and b, inclusive.
// 
// For explanation of optional argument emptyOK,
// see comments of export function isInteger.


export function isIntegerInRange (s:string , a: number, b: number, eok?:any)
{   if (isEmpty(s)) 
       if (isIntegerInRange.arguments.length == 1) return defaultEmptyOK;
       else return (isIntegerInRange.arguments[1] == true);

    // Catch non-integer strings to avoid creating a NaN below,
    // which isn't available on JavaScript 1.0 for Windows.
    if (!isInteger(s, false)) return false;

    // Now, explicitly change the type to integer via parseInt
    // so that the comparison code below will work both on 
    // JavaScript 1.2 (which typechecks in equality comparisons)
    // and JavaScript 1.1 and before (which doesn't).
    let num = parseInt (s);
    return ((num >= a) && (num <= b));
}



// isMonth (STRING s [, BOOLEAN emptyOK])
// 
// isMonth returns true if string s is a valid 
// month number between 1 and 12.
//
// For explanation of optional argument emptyOK,
// see comments of export function isInteger.

export function isMonth (s:string , eok?: any)
{   if (isEmpty(s)) 
       if (isMonth.arguments.length == 1) return defaultEmptyOK;
       else return (isMonth.arguments[1] == true);
    return isIntegerInRange (s, 1, 12);
}



// isDay (STRING s [, BOOLEAN emptyOK])
// 
// isDay returns true if string s is a valid 
// day number between 1 and 31.
// 
// For explanation of optional argument emptyOK,
// see comments of export function isInteger.

export function isDay (s:string , eok?: any)
{   if (isEmpty(s)) 
       if (isDay.arguments.length == 1) return defaultEmptyOK;
       else return (isDay.arguments[1] == true);   
    return isIntegerInRange (s, 1, 31);
}



// daysInFebruary (INTEGER year)
// 
// Given integer argument year,
// returns number of days in February of that year.

export function daysInFebruary (year:number)
{   // February has 29 days in any year evenly divisible by four,
    // EXCEPT for centurial years which are not also divisible by 400.
    return (  ((year % 4 == 0) && ( (!(year % 100 == 0)) || (year % 400 == 0) ) ) ? 29 : 28 );
}



// isDate (STRING year, STRING month, STRING day)
//
// isDate returns true if string arguments year, month, and day 
// form a valid date.
// 

export function isDate (year:string, month:string, day:string)
{   // catch invalid years (not 2- or 4-digit) and invalid months and days.
    if (! (isYear(year, false) && isMonth(month, false) && isDay(day, false))) return false;

    // Explicitly change type to integer to make code work in both
    // JavaScript 1.1 and JavaScript 1.2.
    let intYear = parseInt(year);
    let intMonth = parseInt(month);
    let intDay = parseInt(day);

    // catch invalid days, except for February
    if (intDay > daysInMonth[intMonth]) return false; 

    if ((intMonth == 2) && (intDay > daysInFebruary(intYear))) return false;

    return true;
}


// Get checked value from radio button.
export function getRadioButtonValue (radio: any)
{
    let i 
    for (i = 0; i < radio.length; i++)
    {   
        if (radio[i].checked) { break; }
    }
    return <any>(radio[i]).value;
}
