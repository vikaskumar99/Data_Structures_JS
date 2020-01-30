
class PriorityQueue {
    constructor ()
    {
        this.data=[];
    }
    add(record)
    {
        if(this.data.length==0)
            this.data.push(record);
        else
        {
            var added=false;
            for(let i=0;i<this.data.length;i++)
            {
                if(record[1]<this.data[i][1])
                {
                    this.data.splice(i,0,record);
                    added=true;
                    break;
                }
            }
            if(!added)
                this.data.unshift(record);
        }
    }
    remove()
    {
        return this.data.pop();
    }
    print()
    {
        console.log('elements are:');
        for(let i=0;i<this.data.length;i++)
            console.log(this.data[i]);
    }
}
let q=new PriorityQueue();
q.add(['item',5]);
q.add(['item',0])
q.add(['item',4])
q.add(['item 1',1]);
q.add(['item 2',2]);
q.add(['item 3',3]);
q.print();

q.remove();
q.print();
