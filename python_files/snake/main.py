import pygame
import snake
import pyglet
from pyglet.window.key import *;

pyglet.window.Window()

class App:
    """_summary_
    The App class is focused on creatin the main UI for the game. Pretty simple.
    Handles basically everything required for other classes.
    """
    def __init__(self):
        self._running = True
        self._display_surf = None
        self.size = self.weight, self.height = 840, 400
    
    def on_init(self):
        pygame.init()
        self._display_surf = pyglet.window.Window(self.size)
        self._running = True
    
    def on_event(self):
        pass
    
    def on_loop(self):
        pass
    
    def on_render(self):
        pass
    
    def on_cleanup(self):
        pygame.quit()
    
    def on_execute(self):
        clock = pygame.time.Clock()
        if self.on_init() == False:
            self._running = False
        while(self._running):
            self.on_event()
            self.on_loop()
            self.on_render()
            clock.tick(60)
        self.on_cleanup()
