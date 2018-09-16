import { Subject } from "rxjs";

export class UsersService{
    /*
        A Subject acts like both an observer and an observable.
        So it can be used like 
        userActivated.next(data) or userActivated.subscribe(() => {})

        This is like event emitters and it i true that event emitters are build on top of subjects.
    */ 
    userActivated = new Subject();
}