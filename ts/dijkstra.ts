import Heap from 'heap-js';

const grid = [
    [2, 4, 1],
    [3, 2, 1],
    [3, 2, 5]
];

type Coordinates = [number, number]
const Dirs: Coordinates[] = [[0, 1], [0, -1], [1, 0], [-1, 0]];

function dijkstra(grid: number[][], source: Coordinates) {
    const distances: number[][] = new Array(grid.length).fill(Number.MAX_VALUE)
        .map(() => new Array(grid[0].length).fill(Number.MAX_VALUE));
    const visited: boolean[][] = new Array(grid.length).fill(false)
        .map(() => new Array(grid[0].length).fill(false));
    const minHeap = new Heap<[Coordinates, number]>();

    const outsideBounds = (pos: Coordinates) =>
        pos[0] < 0 || pos[0] >= grid.length || pos[1] < 0 || pos[1] >= grid[0].length;

    const getNeighbours = (pos: Coordinates): Coordinates[] => {
        var neighbours: Coordinates[] = [];
        for (const dir of Dirs) {
            let neighbour: Coordinates = [pos[0] + dir[0], pos[1] + dir[1]];
            if (!outsideBounds(neighbour))
                neighbours.push(neighbour);
        }

        return neighbours;
    }

    const isVisited = (pos: Coordinates) => visited[pos[0]][pos[1]];
    const getDistance = (pos: Coordinates) => distances[pos[0]][pos[1]];
    const setDistance = (pos: Coordinates, distance: number) => {
        distances[pos[0]][pos[1]] = distance;
        minHeap.push([pos, distance]);
    };
    const gridVal = (pos: Coordinates) => grid[pos[0]][pos[1]];

    distances[0][0] = 0;
    minHeap.push([[0, 0], 0]);
    while (minHeap.size() > 0) {
        var currPos = minHeap.pop()![0];
        visited[currPos[0]][currPos[1]] = true;
        for (const neighbour of getNeighbours(currPos)) {
            if (isVisited(neighbour)) continue;
            const newDist = getDistance(currPos) + gridVal(neighbour);
            if (newDist < getDistance(neighbour)) setDistance(neighbour, newDist);
        }
    }

    return distances;
}


console.log(dijkstra(grid, [0, 0]));
