Codewars Kaka: https://www.codewars.com/kata/5b6375f707a2664ada00002a

Name: Who's Online?

Solution:

function whosOnline(friends) {
let result = { online: [], offline: [], away: [] };
for (i = 0; i < friends.length; i++) {
if (friends[i].status === "online" && friends[i].lastActivity <= 10) {
result.online.push(friends[i].username);
} else if (friends[i].status === "offline") {
result.offline.push(friends[i].username);
} else {
result.away.push(friends[i].username);
}
}
if (result.online.length === 0) {
delete result.online;
}
if (result.offline.length === 0) {
delete result.offline;
}
if (result.away.length === 0) {
delete result.away;
}
return result;
}
