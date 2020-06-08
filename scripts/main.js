//Import TypeScript Modules
import * as token_dropdown from './token_dropdown.js';

//untarget?

/* Initialize Module */
Hooks.on('controlToken', () => {
    console.log('Token Action Dropdown Bar | Creating Bar.');
    token_dropdown.initSetup();
});
