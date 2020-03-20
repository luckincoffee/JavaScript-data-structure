class DirectedEdge {
    constructor(v, w, weight) {
        this.v = v;
        this.w = w;
        this.weight = weight;
    }
}

class EdgeWeightedDigraph {
    constructor(V) {
        this.V = V;
        this.E = 0;
        this.adj = [];
        for (let i = 0; i < V; i++) {
            this.adj[i] = [];
        }
    }
    addEdge(e) {
        this.adj[e.v].push(e);
        this.E++;
    }
    getAdj(v) {
        return this.adj[v];
    }
}

class DijKstraSP {
    constructor(G ,s) {
        this.edgeTo = [];
        this.distTo = [];
        this.pq = new Map();
        for (let i = 0; i < G.V; i++) {
            this.distTo[i] = Infinity;
        }
        this.distTo[s] = 0;

        this.pq.set(s, 0);
        while(this.pq.size != 0) {
            let v =  this.delMin();
            this.relax(G, v);
        }
    }
    relax(G, v) {
        for (let i = 0; i < G.adj[v].length; i++) {
            let e = G.adj[v][i];
            let w = e.w;
            if (this.distTo[w] > this.distTo[v] + e.weight) {
                this.distTo[w] = this.distTo[v] + e.weight;
                this.edgeTo[w] = e;
                this.pq.set(w, this.distTo[w]);
            }
        }
    }
    delMin() {
        let min = Infinity;
        let res = [];
        for (let [key, val] of this.pq) {
            if (val < min) {
                res = [key ,val];
                min = val;
            }
        }
        this.pq.delete(res[0]);
        return res[0];
    }
}

let G = new EdgeWeightedDigraph(8);
let e1 = new DirectedEdge(4, 5, 0.35);
let e2 = new DirectedEdge(5, 4, 0.35);
let e3 = new DirectedEdge(4, 7, 0.37);
let e4 = new DirectedEdge(5, 7, 0.28);
let e5 = new DirectedEdge(7, 5, 0.28);
let e6 = new DirectedEdge(5, 1, 0.32);
let e7 = new DirectedEdge(0, 4, 0.38);
let e8 = new DirectedEdge(0, 2, 0.26);
let e9 = new DirectedEdge(7, 3, 0.39);
let e10 = new DirectedEdge(1, 3, 0.29);
let e11 = new DirectedEdge(2, 7, 0.34);
let e12 = new DirectedEdge(6, 2, 0.40);
let e13 = new DirectedEdge(3, 6, 0.52);
let e14 = new DirectedEdge(6, 0, 0.58);
let e15 = new DirectedEdge(6, 4, 0.93);
G.addEdge(e1);
G.addEdge(e2);
G.addEdge(e3);
G.addEdge(e4);
G.addEdge(e5);
G.addEdge(e6);
G.addEdge(e7);
G.addEdge(e8);
G.addEdge(e9);
G.addEdge(e10);
G.addEdge(e11);
G.addEdge(e12);
G.addEdge(e13);
G.addEdge(e14);
G.addEdge(e15);
let res = new DijKstraSP(G, 0);
console.log(res)