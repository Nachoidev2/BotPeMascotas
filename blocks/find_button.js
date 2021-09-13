module.exports = {
    name: "Find button",

    description: "Finds a button.",

    category: "Button Stuff",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "id": "buttonid",
            "name": "Event-ID",
            "description": "Type: Action\n\nDescription: The custom id who you provided.",
            "types": ["text"]
        }
    ],

    options: [
        {
            "id": "triggerfilter",
            "name": "Enable replyed",
            "description": "Description: Filter buttons that already got replayed.",
            "type": "SELECT",
            "options": {
                "false": "Yes",
                "true": "No"
            }
        }
    ],

    outputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            "types": ["action"]
        },
        {
            "id": "message",
            "name": "Message",
            "description": "Type: Action\n\nDescription: The button message [Message].",
            "types": ["object"]
        },
        {
            "id": "button",
            "name": "Button",
            "description": "Type: Action\n\nDescription: The button message [Message].",
            "types": ["object"]
        }
    ],

    code(cache) 
    {
        const buttonid = this.GetInputValue("buttonid", cache);
        //const triggerfilter = this.GetOptionValue("triggerfilter", cache) == "true" ? true : false
        //if(triggerfilter && button.deffered) return

        if (typeof buttonid === "undefined" || buttonid === button.id) 
        {
        button = button.fetch();(buttonid + "");    
        this.StoreOutputValue(button, "button", cache);
        }
            
    }
}