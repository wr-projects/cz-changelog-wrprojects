module.exports = {
  types: [
    { types: ['init'], label: '๐ First commit' },
    { types: ['feat'], label: 'โญ New Features' },
    { types: ['fix'], label: '๐ Bugfixes' },
    { types: ['perf'], label: '๐ Performance Improvements' },
    { types: ['ci'], label: '๐ Continuous Integration' },
    { types: ['refactor'], label: 'โป๏ธ Refactors' },
    { types: ['delete'], label: '๐ฅ Delete file/folder' },
    { types: ['security'], label: '๐ Security' },
    { types: ['up_deph'], label: 'โฌ๏ธ Upgrade dependencies' },
    { types: ['down_deph'], label: 'โฌ๏ธ Downgrade dependencies' },
    { types: ['translate'], label: '๐ Translate' },
    { types: ['hotfix'], label: '๐ Hotfix Important' },
    { types: ['docs'], label: '๐ Documentation Changes' },
    { types: ['test', 'tests'], label: '๐งช Tests' },
    { types: ['style'], label: '๐จ Code Style Changes' },
    { types: ['chore'], label: '๐ง Chores' },
    { types: ['mac'], label: '๐ Mac OsX' },
    { types: ['linux'], label: '๐ง Chores' },
    { types: ['remove_deph'], label: 'โ Remove dependencies' },
    { types: ['add_deph'], label: 'โ Add dependencies' },
    { types: ['docker'], label: '๐ณ Docker' },
    { types: ['revert'], label: 'โช Reverts' },
    { types: ['access'], label: 'โฟ Accessibility' },
    { types: ['move'], label: '๐ Move file/folder' },
    { types: ['rename'], label: '๐ Rename file/folder' },
    { types: ['bot'], label: '๐ค Bots' },
    { types: ['housekeeping'], label: '๐งน Housekeeping' },
    { types: ['database'], label: '๐๏ธ Database' },
    { types: ['android'], label: '๐ค Android' },
    { types: ['ios'], label: '๐ iOS' },
    { types: ['other'], label: 'Other Changes' },
  ],

  excludeTypes: ['other'],

  renderTypeSection: function (label, commits) {
    let text = `\n## ${label}\n`;

    commits.forEach((commit) => {
      text += `- ${commit.subject}\n`;
    });

    return text;
  },

  renderChangelog: function (release, changes) {
    const now = new Date();
    return (
      `# ${release} - ${now.toISOString().substr(0, 10)}\n` + changes + '\n\n'
    );
  },
};
