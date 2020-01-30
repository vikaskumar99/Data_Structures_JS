class Queue {
    constructor ()
    {
        this.data=[];
    }
    add(record)
    {
        this.data.unshift(record);
    }
    remove()
    {
        return this.data.pop();
    }
    print()
    {
        for(let i=0;i<this.data.length;i++)
            print(this.data[i]);
    }
}

let q=new Queue();
q.add(3);
q.add(5);
q.add(7);
q.print();

q.remove();
q.print();
