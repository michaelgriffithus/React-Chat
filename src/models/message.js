import uuidv4 from 'uuid/v4';
import { getTime } from '../util/Util';
class Message {

    constructor(user, content) {
        this.id = uuidv4();
        this.user = user;
        this.content = content;
        this.time = getTime(new Date());
    }
}

export default Message;