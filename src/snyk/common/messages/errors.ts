export const errorsLogs = {
  loginStatus: 'Failed to check user session on server',
  filtersFiles: 'Failed fetching filters files for bundles from server',
  analyse: 'Analyse request failed',
  failedAnalysis: 'Failed executing analysis',
  failedExecution: 'Failed extension pipeline execution',
  failedExecutionDebounce: 'Failed extension pipeline execution after debounce',
  failedExecutionTransient: 'Failed extension pipeline execution after transient error',
  undefinedError: 'Unrecognized error',
  watchFileBeforeExtendBundle: 'Failed on watching file changes before extending bundle',
  updateReviewPositions: 'Failed to update review results positions while editing file',
  errorReportFail: 'Failed to send error report',
  modifiedFile: (type: string): string => `Failed to handle changes on file of type ${type}`,
  command: (type: string): string => `Failed to execute ${type} command`,
  configWatcher: 'Failed to handle configuration update',
  loadingBadge: 'Failed to set loading badge icon',
  welcomeNotification: 'Failed to handle welcome notification',
  checkAdvancedMode: 'Failed to check advanced mode',
};