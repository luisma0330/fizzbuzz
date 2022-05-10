class ExplorerService{
    static filterByMission(explorers, mission){
        const explorersByMission = explorers.filter((explorer) => explorer.mission === mission);
        return explorersByMission
    }

    static getAmountOfExplorersByMission(explorers, mission){
        const explorersByMission =  explorers.filter((explorer) => explorer.mission === mission);
        return explorersByMission.length
    }

    static getExplorersUsernamesByMission(explorers, mission){
        const explorersByMission =  explorers.filter((explorer) => explorer.mission === mission);
        const explorerUsernameByMission = explorersByMission.map((explorer) => explorer.githubUsername);
        return explorerUsernameByMission
    }
}

module.exports = ExplorerService