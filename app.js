const helperSenderConfig = { serverId: 8896, active: true };

const helperSenderHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_8896() {
    return helperSenderConfig.active ? "OK" : "ERR";
}

console.log("Module helperSender loaded successfully.");