// Original - https://gist.github.com/stella-yc/49a7b96679ab3bf06e26421fc81b5636
// fork - https://gist.github.com/MoeweX/ab98efee9435b47529e3a6cb50c5b605

const seattle = {
    a: {
        b: 1
    },
    b: {
        a: 2
    },
    c: {
        d: 3
    },
    d: {
        c: 4
    }
}
const redmond = {
    a: {
        b: 2,
        c: 5
    },
    b: {
        c: 2
    },
    c: {
        a: 8
    }
}

const lowestCostNode = (costs, processed) => {
    return Object.keys(costs).reduce((lowest, node) => {
        if (lowest === null || costs[node] < costs[lowest]) {
            if (!processed.includes(node)) {
                lowest = node;
            }
        }
        return lowest;
    }, null);
};

const INFINITY = "Infinity";
// function that returns the minimum cost and path to reach Finish
module.exports = function (graph, startNodeName, endNodeName) {
    // default matching start and end fall out function
    if (startNodeName === endNodeName) {
        return {
            distance: 0.0,
            path: [endNodeName]
        };
    }
    // track the lowest cost to reach each node
    let costs = {};
    costs[endNodeName] = INFINITY;
    costs = Object.assign(costs, graph[startNodeName]);

    // track paths
    const parents = {
        endNodeName: null
    };
    for (let child in graph[startNodeName]) {
        parents[child] = startNodeName;
    }
    console.log(parents)
    // track nodes that have already been processed
    const processed = [];

    console.log(costs)
    let node = lowestCostNode(costs, processed);
    console.log(node);

    while (node) {
        let cost = costs[node];
        let children = graph[node];
        for (let n in children) {
            if (String(n) !== String(startNodeName)) {
                let newCost = cost + children[n];
                if (!costs[n] || costs[n] > newCost) {
                    costs[n] = newCost;
                    parents[n] = node;
                }
            }
        }
        processed.push(node);
        node = lowestCostNode(costs, processed);
    }

    let optimalPath = [endNodeName];
    let parent = parents[endNodeName];
    while (parent) {
        optimalPath.push(parent);
        parent = parents[parent];
    }
    optimalPath.reverse();

    if (costs[endNodeName] === INFINITY) {
        return {
            message: "There is no path between '" + startNodeName + "' and '" + endNodeName + "'."
        };
    }
    return {
        distance: costs[endNodeName],
        path: optimalPath
    };

};