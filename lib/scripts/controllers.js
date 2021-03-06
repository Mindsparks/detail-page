// Define your controller and the objects you need to reference.
myAngularApp.controller('appInfoController', function ($rootScope, $scope) {
  /* Define a variable (an object variable in the case below). All variables must be within angular's $scope to be referenced in a template.
     To create a global variable, use $rootScope. */
  $scope.myApp = {
    name: 'DJ Expo',
    description: 'Description goes here'
  };
	$scope.songs = [
    {
      id:1,
      title: 'Drift',
      artist: 'Metrik',
      album: "Drift | Freefall",
      short_description: null,
      meta_description: null,
      meta_title: null,
      slug: "drift-freefall-metrik-drift",
      
      label: "Viper Recordings",
      
      comments_count: 1,
      listens_count: 574,
      selected: false
    },
    {
      id:2,
      title: 'Juicebox',
      artist: 'Datsik',
      album: "Cold Blooded Part One",
      short_description: null,
      meta_description: null,
      meta_title: null,
      slug: "cold-blooded-part-1-datsik-juicebox",
      
      label: "Firepower Records",
      
      comments_count: 1,
      listens_count: 7483,
      selected: false
    },
    {
      id:3,
      title: 'Champloo',
      artist: 'Mord Fustang',
      album: "Champloo",
      short_description: null,
      meta_description: null,
      meta_title: null,
      slug: "champloo-mord-fustang-champloo",
      
      label: "Mord",
      
      comments_count: 1,
      listens_count: 52,
      selected: false
    },
    {
      id:4,
      title: 'Affinity',
      artist: 'Hydra',
      album: "Nightmusic Volume 1",
      short_description: null,
      meta_description: null,
      meta_title: null,
      slug: "nightmusic-volume-1-hydra-affinity",
      
      label: "Thrilseekers",
      
      comments_count: 1,
      listens_count: 19373,
      selected: false
    },
    {
      id:5,
      title: 'Vindicate',
      artist: 'Datsik',
      album: "Vindicate",
      short_description: null,
      meta_description: null,
      meta_title: null,
      slug: "vindicate-datsik-vindicate",
      
      label: "Firepower Records",
      
      comments_count: 1,
      listens_count: 1234,
      selected: false
    },
    {
      id:6,
      title: 'Mumbling Music [Access Denied Remix]',
      artist: 'Buzzwak',
      album: "Buzz'd",
      short_description: null,
      meta_description: null,
      meta_title: null,
      slug: "buzzd-buzzwak-mumbling-music-access-denied-remix",
      
      label: "Mumble",
      
      comments_count: 1,
      listens_count: 901,
      selected: false
    },
    {
      id:7,
      title: 'Sawchain',
      artist: 'Savant',
      album: "Orakel",
      short_description: null,
      meta_description: null,
      meta_title: null,
      slug: "orakel-savant-sawchain",
      
      label: "People Poison",
      
      comments_count: 1,
      listens_count: 1234,
      selected: false
    },
    {
      id:8,
      title: 'Over It',
      artist: 'At Dawn We Rage',
      album: "Over It",
      short_description: null,
      meta_description: null,
      meta_title: null,
      slug: "over-it-at-dawn-we-rage-over-it",
      
      label: "ATDWR Records",
      
      comments_count: 1,
      listens_count: 1234,
      selected: false
    },
    {
      id:9,
      title: 'The Blob',
      artist: 'Figure',
      album: "Monsters of Drumstep Volume 4",
      short_description: null,
      meta_description: null,
      meta_title: null,
      slug: "monsters-of-drumstep-volume-4-figure-the-blob",
      
      label: "Figure Self Release",
      
      comments_count: 1,
      listens_count: 1234,
      selected: false
    },
    {
      id:10,
      title: 'Close Your Eyes',
      artist: "Hell's Kitchen",
      album: "Space Odyssey Mars",
      short_description: null,
      meta_description: null,
      meta_title: null,
      slug: "space-odyssey-mars-hells-kitchen-close-your-eyes",
      
      label: "Figure Self Release",
      
      comments_count: 1,
      listens_count: 1234,
      selected: false
    },
    {
      id:11,
      title: 'Hikari',
      artist: 'BT',
      album: "If The Stars Are Eternal Then So Are You and I",
      short_description: null,
      meta_description: null,
      meta_title: null,
      slug: "if-the-stars-are-eternal-then-so-are-you-and-i-bt-hikari",
      
      label: "Figure Self Release",
      
      comments_count: 1,
      listens_count: 1234,
      selected: false
    },
    {
      id:12,
      title: 'Kiara',
      artist: 'Bonobo',
      album: "Black Sands",
      short_description: null,
      meta_description: null,
      meta_title: null,
      slug: "black-sands-bonobo-kiara",
      
      label: "Figure Self Release",
      
      comments_count: 1,
      listens_count: 1234,
      selected: false
    }
    ];

  $scope.toggleAlbumState = function (song) {
    if (song.selected == false) {
      song.selected = true;
      console.log('Hi');
    }
    else {
      song.selected = false;
      console.log('Bye');
    }
    return song;
  };

  $scope.ITEMS_PER_PAGE = 6;
  console.log($scope.ITEMS_PER_PAGE);
  $scope.totalSongs = $scope.songs.length;

  $scope.pages = ($scope.totalSongs)/$scope.ITEMS_PER_PAGE;
  console.log($scope.pages);

});