// Define your controller and the objects you need to reference.
myAngularApp.controller('appInfoController', function ($rootScope, $scope) {
  /* Define a variable (an object variable in the case below). All variables must be within angular's $scope to be referenced in a template.
     To create a global variable, use $rootScope. */
  $scope.myApp = {
    name: 'DJ Expo',
    description: 'Description goes here'
  };
	$scope.songs = 
    {
      id:1,
      title: 'Good for Me [Above & Beyond Club Mix]',
      artist: 'Above & Beyond',
      album: "Anjunabeats Volume 4",
      short_description: null,
      meta_description: null,
      meta_title: null,
      slug: "anjunabeats-volume-4-above-and-beyond-good-for-me-above-and-beynd-club-mix",
      
      label: "Anjunabeats",
      
      comments_count: 1,
      listens_count: 574,
    };
  ];
});